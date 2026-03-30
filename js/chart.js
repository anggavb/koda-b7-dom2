const data = [
  {
    "id": "e001",
    "date": "2024-12-25",
    "category": "Makanan",
    "description": "Makan siang KFC",
    "amount": 55000,
    "type": "expense"
  },
  {
    "id": "e002",
    "date": "2024-12-28",
    "category": "Transportasi",
    "description": "Isi bensin",
    "amount": 100000,
    "type": "expense"
  },
  {
    "id": "e003",
    "date": "2025-01-05",
    "category": "Tagihan",
    "description": "Bayar Listrik",
    "amount": 350000,
    "type": "expense"
  },
  {
    "id": "e004",
    "date": "2025-01-05",
    "category": "Makanan",
    "description": "Belanja Mingguan",
    "amount": 250000,
    "type": "expense"
  },
  {
    "id": "e005",
    "date": "2025-01-10",
    "category": "Hiburan",
    "description": "Nonton Bioskop",
    "amount": 75000,
    "type": "expense"
  },
  {
    "id": "e006",
    "date": "2025-02-15",
    "category": "Transportasi",
    "description": "Service Motor",
    "amount": 200000,
    "type": "expense"
  },
  {
    "id": "e007",
    "date": "2025-02-20",
    "category": "Kesehatan",
    "description": "Beli Vitamin",
    "amount": 120000,
    "type": "expense"
  },
  {
    "id": "e008",
    "date": "2025-03-01",
    "category": "Tagihan",
    "description": "Internet Bulanan",
    "amount": 300000,
    "type": "expense"
  }
];

let expenseChart;

const select = document.querySelector('select[name="expense"]');
select.onchange = (e) => {
  const value = e.target.value;
  let filteredData = {};
  
  data.forEach(item => {
    const date = new Date(item.date);
    let label;
    
    switch (value) {
      case 'daily':
        label = date.toISOString().split('T')[0];
        break;
      case 'monthly':
        label = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        break;
      case 'annually':
        label = `${date.getFullYear()}`;
        break;
    }
    
    filteredData[label] = (filteredData[label] || 0) + item.amount;
  });
  
  const labels = Object.keys(filteredData).sort();
  const dataset = labels.map(label => filteredData[label]);

  initChart(labels, dataset);
}

const initChart = async (labels, dataset) => {
  if (expenseChart) expenseChart.destroy()

  expenseChart = new Chart(
    document.getElementById('chart-wallet'),
    {
      type: 'bar',
      data: {
        labels: labels || [],
        datasets: [
          {
            label: 'Expense by: ' + select.value,
            data: dataset || [],
          }
        ]
      }
    }
  );
}

initChart();