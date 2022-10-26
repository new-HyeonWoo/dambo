
class Charts extends TemplateComponent {


    constructor(id, data, options) {
        super(id, $('#' + id), data, options);
    }

    template () {
        return `<canvas id="${this.id}_chart" width="${this.options.chartwidth}" height="${this.options.chartheight}"></canvas>`;
    }

    after() {
        const labelsArr =  [];
        const dataArr =  [];
        
        for(let i = 0; i < this.data.data.length; i++){
            labelsArr.push(this.data.data[i][this.options.format.text]);
            dataArr.push(this.data.data[i][this.options.format.value]);
        }

        const chartType= this.options.chartType;
        const chartName= this.options.chartName;

        const data = {
            labels: labelsArr,
            datasets: [{
                label: chartName,
                data: dataArr,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        }

        const config = {
            type: chartType,
            data: data,
            options: {
                responsive: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        const ctx = $('#'+this.id+'_chart')
        // const ctx = document.getElementById('감정현황_Chart_건수_chart');
        new Chart(
            ctx,
            config
        );

    }    
    getValue () {
        return this.target.val();
    }

    setValue (value) {
        this.target.val(value);
    }
}