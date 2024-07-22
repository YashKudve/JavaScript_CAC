const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
    <div class='color'>
        <table style = 'border: 1px solid white;
  border-collapse: collapse;'>
            <tr style = 'border: 1px solid white;
  border-collapse: collapse;'>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr >
                <td>${e.key === " "? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
    
        </table>
</div>
    `
})