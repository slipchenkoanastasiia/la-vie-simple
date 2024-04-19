function toggleColor(event) {
    let svgIcon = event.target; 
    let isWhite = svgIcon.classList.contains('white-fill');

    if (isWhite) {
        svgIcon.classList.remove('white-fill');
        svgIcon.style.fill = 'none'; 
        svgIcon.style.stroke = 'var(--bg-color)'; 
    } else {
        svgIcon.classList.add('white-fill');
        svgIcon.style.fill = 'white'; 
        svgIcon.style.stroke = 'none'; 
    }
}

