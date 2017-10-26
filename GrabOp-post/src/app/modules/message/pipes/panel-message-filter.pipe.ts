import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'panelMessageFilter',
  pure: false
})
export class PanelMessageFilterPipe implements PipeTransform {

  transform(contacts: any[], filterParam?: string): any {
    if (!contacts || !filterParam) {
      return contacts;
    }
    filterParam = filterParam.trim().toLowerCase();
    return contacts.filter(contact => {
      if (!filterParam
        || (contact.name && contact.name.trim().toLowerCase().match(filterParam))
        || (contact.lastConversation.body && contact.lastConversation.body.trim().toLowerCase().match(filterParam))
      ) return contact;
    });

  }

}
