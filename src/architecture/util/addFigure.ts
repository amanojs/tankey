import numericCheck from './numericCheck';

function addFigure(val: string | number) {
    val = String(val);
    if (numericCheck(Number(val))) return;
    const figureVal = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return figureVal;
}

export default addFigure;
