import { Pipe, PipeTransform } from '@angular/core';

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
                || (connection.displayName && connection.displayName.trim().match(filterParam))
                || (connection.firstName && connection.firstName.trim().match(filterParam))
                || (connection.lastName && connection.lastName.trim().match(filterParam))
                || (connection.username && connection.username.trim().match(filterParam))
                || (connection.jobTitle && connection.jobTitle.trim().match(filterParam))
                || (connection.company && connection.company.trim().match(filterParam))
            ) return connection;
        });

    }

}
