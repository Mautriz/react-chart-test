export const validateJsonEntry = (json, axesFields) => {
    // Il reducer con null manda un errore
    // I nomi degli assi sono necessari
    if (!axesFields) return null;
    const { xAxesField, yAxesField } = axesFields;
    try {
        // E' best practice rimpiazzare sempre l'oggetto iniziale e non cambiarlo direttamente
        let newChartData = {
            data: [],
            labels: []
        };
        // Controlla che ogni item del json inserito abbia i cambi scelti dai selettori
        // Il valore delle asse Y deve essere un numero, o deve potersi parsare in numero
        for (const item of json) {
            if (
                !item[xAxesField] ||
                !item[yAxesField] ||
                isNaN(+item[yAxesField])
            ) {
                return null;
            }
            // in caso di successo, aggiunge i campi dell'elemento al nuovo oggetto che poi verrà mandato al grafioc
            newChartData.labels.push(item[xAxesField]);
            newChartData.data.push(+item[yAxesField]);
        }
        return newChartData;
    } catch (e) {
        // In caso di qualsiasi errore, ritorna null, il reducer aggiorna il pezzo di stato "error" con un errore
        return null;
    }
};
