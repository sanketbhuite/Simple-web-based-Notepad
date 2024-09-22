    function save() {
        var txt = document.getElementById('np').value;
        var filename = prompt("Enter file name:", "NewFile.html");
        if (filename) {
            var blob = new Blob([txt], { type: 'text/plain' });
            var a = document.createElement('a');
            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.click();
        }
    }

    function openFile() {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('np').value = e.target.result;
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function runCode() {
        var code = document.getElementById('np').value;
        var frame = document.getElementById('finally').contentWindow.document;
        frame.open();
        frame.write(code);
        frame.close();
    }
