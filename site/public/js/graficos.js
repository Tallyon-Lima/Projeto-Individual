
  const ctx = document.getElementById('totalSeguidores');

  var test = 20;
  var test2 = 50;



  new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
        label: 'Total de seguidores',
        data: [test, 50, test2, 40, 50, 50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(0,0,0)',
          'rgb(255, 255, 255)',
          'rgb(0,0,255)',
        ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
