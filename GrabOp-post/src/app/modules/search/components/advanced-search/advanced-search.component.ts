import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { VOPost } from "../../../../models/vos";
import { PostService } from "../../../post/services/post.service";
import { ConnectionService } from "../../../connection/services/connection.service";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  @Input() filters: Models.Filters;
  offeringsCant = 0;
  needsCant = 0;
  peopleCant = 0;
  posts: VOPost[];
  myConnections: Models.VOConnection[];
  connections: Models.VOConnection[];

  constructor(private postService: PostService,
              private connectionService: ConnectionService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (!this.filters) {
      this.filters = {
        search: '',
        country: '',
        province: '',
        city: '',
        businessStyle: {
          partnership: false,
          exchange: false,
          donate: false,
          internship: false,
          money: false
        },
        fixed: {
          start: '',
          end: ''
        },
        hourly: {
          start: '',
          end: ''
        },
        commission: {
          start: '',
          end: ''
        }
      };
    }

    this.route.params.subscribe((params: Params) => {
      if (params['search']) {
        this.filters.search = params['search'];
      }
      this.advancedSearch();
    });

  }

  advancedSearch() {

    // TODO replace all symbol
    const search = this.filters.search.trim().split(/\s+/);
    const country = this.filters.country.trim().split(/\s+/);
    const province = this.filters.province.trim().split(/\s+/);
    const city = this.filters.city.trim().split(/\s+/);

    this.postService.getPersonPosts('16').subscribe(posts => {
      if (posts) {
        let result = [];
        this.offeringsCant = 0;
        this.needsCant = 0;
        for (let i in posts) {
          if (this.checkFilters()
            || this.match(search, posts[i].country)
            || this.match(search, posts[i].province)
            || this.match(search, posts[i].city)
            || this.match(country, posts[i].country)
            || this.match(province, posts[i].province)
            || this.match(city, posts[i].city)
            || this.match(search, posts[i].title)
            || this.match(search, posts[i].description)
            || (this.filters.businessStyle.partnership && posts[i].isPartnership == this.filters.businessStyle.partnership)
            || (this.filters.businessStyle.exchange && posts[i].isExchange == this.filters.businessStyle.exchange)
            || (this.filters.businessStyle.donate && posts[i].isDonate == this.filters.businessStyle.donate)
            || (this.filters.businessStyle.internship && posts[i].isInternship == this.filters.businessStyle.internship)
            || (this.filters.businessStyle.money && posts[i].isMoney == this.filters.businessStyle.money)
            || this.ranger(this.filters.fixed.start, this.filters.fixed.end, posts[i].fixedRateTo, posts[i].fixedRateFrom)
            || this.ranger(this.filters.hourly.start, this.filters.hourly.end, posts[i].hourlyRateTo, posts[i].hourlyRateFrom)
            || this.ranger(this.filters.commission.start, this.filters.commission.end, posts[i].commissionTo, posts[i].commissionFrom)
          ) {
            result.push(posts[i]);
            if (posts[i].type == "offer") {
              this.offeringsCant++;
            } else if (posts[i].type == "need") {
              this.needsCant++;
            }
          }
        }
        this.posts = result;
      }
    });

    this.connectionService.getMyConnections().subscribe(myConnections => {
      this.myConnections = myConnections;
    });

    this.connectionService.getProfileConnections('17').subscribe(
      connections => {
        this.peopleCant = 0;
        let result = [];
        for (let i in connections) {
          if (
            this.checkFilters()
            || this.match(search, connections[i].description)
            || this.match(search, connections[i].display_name)
            || this.match(search, connections[i].company)
            || this.match(search, connections[i].jobtitle)
            || this.match(search, connections[i].user_name)
            || this.match(search, connections[i].first_name)
            || this.match(search, connections[i].last_name)
          ) {
            result.push(connections[i]);
            this.peopleCant++;
          }
        }
        this.connections = result;
      }
    )
  }

  private checkFilters() {
    return (
      !this.filters.search
      && !this.filters.country
      && !this.filters.province
      && !this.filters.city
      && !this.filters.businessStyle.partnership
      && !this.filters.businessStyle.exchange
      && !this.filters.businessStyle.donate
      && !this.filters.businessStyle.internship
      && !this.filters.businessStyle.money
      && !this.filters.fixed.start
      && !this.filters.fixed.end
      && !this.filters.hourly.start
      && !this.filters.hourly.end
      && !this.filters.commission.start
      && !this.filters.commission.end
    );
  }

  private match(split, value: string) {
    if (value) {
      value = value.trim();
    }
    if (!value) {
      return false;
    }
    for (let i in split) {
      // TODO add input on models to crate number of incident on matching
      if (split[i] && value.match(new RegExp(split[i], 'i'))) {
        return true;
      }
    }
    return false;
  }

  private ranger(start, end, to, from) {
    if ((start && end)) {
      return (to >= parseFloat(start)) && (from <= parseFloat(end));
    }
    if (end) {// if isNot(start && end) then start is zero
      return (from <= parseFloat(end));
    }
    if (start) {
      return (to >= parseFloat(start));
    }
  }

}
