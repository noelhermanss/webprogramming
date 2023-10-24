function changeTableWidth(width) {
    document.querySelector('table').style.width = width;
}

function changeTableBorderAndSpacing(borderWidth) {
    document.querySelector('table').style.border = `${borderWidth}px solid black`;
    document.querySelector('table').style.borderSpacing = `${borderWidth}px`;
}

function changeTableBackgroundColor(color) {
    document.querySelector('table').style.backgroundColor = color;
}

function resetTableStyles() {
    document.querySelector('table').style.width = '50%';
    document.querySelector('table').style.border = '1px solid black';
    document.querySelector('table').style.backgroundColor = '#f2f2f2';
}
