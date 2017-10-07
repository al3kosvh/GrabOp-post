import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'connectionSearch',
  pure: false
})
export class ConnectionSearchPipe implements PipeTransform {

  transform(connections: Models.VOConnection[], filterParam?: string): any {
    if (!connections || !filterParam) {
      return connections;
    }
    filterParam = filterParam.trim();
    return connections.filter(connection => {
      if (!filterParam
        || (connection.display_name && connection.display_name.trim().match(filterParam))
        || (connection.first_name && connection.first_name.trim().match(filterParam))
        || (connection.last_name && connection.last_name.trim().match(filterParam))
        || (connection.user_name && connection.user_name.trim().match(filterParam))
        || (connection.jobtitle && connection.jobtitle.trim().match(filterParam))
        || (connection.company && connection.company.trim().match(filterParam))
      ) return connection;
    });

  }

}
