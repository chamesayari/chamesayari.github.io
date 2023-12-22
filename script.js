function getGatherTrafficsInfos() {
  var table;
  var totalTraffics = 0;
  var botTraffics = 0;
  var realTraffics = 0;
  const goodFileUrl = "https://pvt-1.ru/securel/1/good.txt";
  const badFileUrl = "https://pvt-1.ru/securel/1/bad.txt";
  table = document.getElementById("tbody-id");

  // good File Fetching

  fetch(goodFileUrl)
    .then(response => response.text())
    .then(data => {
      // Split the content into lines
      var lines = data.split("\r\n");
      realTraffics = lines.length;
      var realTrafficsHtml = document.getElementById('realTraffics');
      if (realTrafficsHtml) {
      var newText = document.createTextNode(realTraffics);
      realTrafficsHtml.appendChild(newText);
      }
      // Process each line
      lines.forEach(line => {
        let country, isp, ua, ip, status;
        [country, isp, ua, ip, status] = line.split('|');

        // Auto Increment Table
        var trTable = document.createElement('tr');
        var tdCountry = document.createElement('td');
        var tdIsp = document.createElement('td');
        var tdUa = document.createElement('td');
        var tdIp = document.createElement('td');
        var tdStatus = document.createElement('td');

        tdCountry.textContent = country;
        tdIsp.textContent = isp;
        tdUa.textContent = ua;
        tdIp.textContent = ip;
        tdStatus.textContent = status;
        trTable.appendChild(tdCountry);
        trTable.appendChild(tdIsp);
        trTable.appendChild(tdUa);
        trTable.appendChild(tdIp);
        trTable.appendChild(tdStatus);
        table.appendChild(trTable);


      });
    })
    .catch(error => console.error('Error fetching the Real results file', error));

  // Bad File Fetching

  fetch(badFileUrl)
    .then(response => response.text())
    .then(data2 => {
      // Split the content into lines
      const lines2 = data2.split("\r\n");
      botTraffics = lines2.length;
      totalTraffics = realTraffics + botTraffics;
      
     
      var botTrafficsHtml = document.getElementById('botTraffics');
      
      if (botTrafficsHtml) {
      var newText = document.createTextNode(botTraffics);
          botTrafficsHtml.appendChild(newText);
      }
      
      // Process each line
      lines2.forEach(line => {
        let country, isp, ua, ip, status;
        [country, isp, ua, ip, status] = line.split('|');

        // Auto Increment Table
        var trTable = document.createElement('tr');
        var tdCountry = document.createElement('td');
        var tdIsp = document.createElement('td');
        var tdUa = document.createElement('td');
        var tdIp = document.createElement('td');
        var tdStatus = document.createElement('td');

        tdCountry.textContent = country;
        tdIsp.textContent = isp;
        tdUa.textContent = ua;
        tdIp.textContent = ip;
        tdStatus.textContent = status;
        trTable.appendChild(tdCountry);
        trTable.appendChild(tdIsp);
        trTable.appendChild(tdUa);
        trTable.appendChild(tdIp);
        trTable.appendChild(tdStatus);
        table.appendChild(trTable);


      });
        var totalTrafficsHtml = document.getElementById('totalTraffics');
        if (totalTrafficsHtml) {
        var newText = document.createTextNode(totalTraffics);
          totalTrafficsHtml.appendChild(newText);
        }
    })
    .catch(error => console.error('Error fetching the Bot results file', error));


}

function paginationOfTable(pageNumber, rowsPerPage) {
  var table = document.getElementById("table-id");
  var rows = table.getElementsByTagName("tr");
  var totalPages = Math.ceil(rows.length / rowsPerPage);

  var pagination = document.getElementById("pagination");
  pagination.innerHTML = '';

  var previousButton = document.createElement('li');
  var previousLink = document.createElement('a');
  previousLink.href = "#";
  previousLink.className = "page-link";
  previousLink.textContent = "Previous";
  previousLink.setAttribute("onclick", "paginationOfTable(" + (pageNumber - 1) + ", " + rowsPerPage + ")");
  previousButton.appendChild(previousLink);
  pagination.appendChild(previousButton);

  for (var i = 1; i <= totalPages; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = "#";
    a.className = "page-link";
    a.textContent = i;
    if (i === pageNumber) {
      a.classList.add('current-page'); // adding blue color to the current number
    }
    a.setAttribute("onclick", "paginationOfTable(" + i + ", " + rowsPerPage + ")");
    li.appendChild(a);
    pagination.appendChild(li);
  }

  var nextButton = document.createElement('li');
  var nextLink = document.createElement('a');
  nextLink.href = "#";
  nextLink.className = "page-link";
  nextLink.textContent = "Next";
  nextLink.setAttribute("onclick", "paginationOfTable(" + (pageNumber + 1) + ", " + rowsPerPage + ")");
  nextButton.appendChild(nextLink);
  pagination.appendChild(nextButton);

  var startIndex = (pageNumber - 1) * rowsPerPage;
  var endIndex = pageNumber * rowsPerPage;

  for (var i = 0; i < rows.length; i++) {
    if (i >= startIndex && i < endIndex) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}






function FilterkeyWord_all_table() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_input_all");
  filter = input.value.toUpperCase();
  table = document.getElementById("table-id");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        txtValue = cell.textContent || cell.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}


function filterMaxRows() {
  // Declare Variable
  var input, filter, table, tr, i;
  input = document.getElementById("maxRows");
  filter = input.value;
  table = document.getElementById("table-id");
  tr = table.getElementsByTagName("tr");

  // Loop Throught the table tr and shows only value of maxRows

  for (i = 0; i < tr.length; i++) {
    if (i <= filter) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";

    }

  }
}
