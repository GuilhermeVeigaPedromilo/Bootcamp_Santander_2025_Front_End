const findOverflowingElements = () => {
    const elements = document.querySelectorAll('*');
    const overflowing = [];
    
    elements.forEach(el => {
        if (el.scrollWidth > document.documentElement.clientWidth) {
            overflowing.push(el);
            console.log('Elemento ultrapassando:', el, 'Largura:', el.scrollWidth);
        }
    });
    
    return overflowing;
};

findOverflowingElements();