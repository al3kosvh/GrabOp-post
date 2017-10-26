import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'connectionFilter',
    pure: false
})
export class ConnectionFilterPipe implements PipeTransform {

    transform(connections: Models.VOConnection[], filterParam?: number): any {
        if (!connections || !filterParam) {
            return connections;
        }

        return connections.filter(connection => {
            if (connection.connectionStatus == filterParam) return connection;
        });

    }

}
