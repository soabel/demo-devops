
export class HelperUtil {

    public convertArraytoString(data: any[]): string {
        let queryFinal: string = '';

        data= this.removeDuplicates(data);

        queryFinal += `[`;

        for (let i: any = 0; i < data.length; i++) {
            queryFinal += `"${data[i]}"`;

            if (data.length - 1 === i) {
                queryFinal += ``;
            } else {
                queryFinal += `,`;
            }
        }

        queryFinal += `]`;

        return queryFinal;
    }

    public removeDuplicates(data: any[]) {
        let unique = {};
        data.forEach(function(i) {
          if(!unique[i]) {
            unique[i] = true;
          }
        });
        return Object.keys(unique);
    }
}
