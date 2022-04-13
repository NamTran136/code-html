function changeFunc() {
    const hr = document.getElementsByTagName("hr");
     var selectBox = document.getElementById("selectBox");
     var selectedValue = selectBox.options[selectBox.selectedIndex].value;
     
     const collection = document.getElementsByClassName("COLOR");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = selectedValue;
    hr[i].style.borderColor = selectedValue;
    }
    
    }