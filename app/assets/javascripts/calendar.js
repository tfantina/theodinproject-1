const create_day = (x, y, fill, day) => {
  let svg = document.getElementById("calendar");
  let box = document.createElementNS("http://www.w3.org/2000/svg", "rect")
  box.setAttribute('x', x);
  box.setAttribute('y', y);
  box.setAttribute('height', '10');
  box.setAttribute('width', '10');
  box.setAttribute('fill', fill);
  box.setAttribute('rx', '2');
  box.setAttribute("value", day)
  box.setAttribute("id", `box_${day}`)
  box.addEventListener("mouseenter", (e) => {showToolTip(e, day)})
box.addEventListener("mouseout", () => {hideToolTip()})
svg.appendChild(box);
}

const showToolTip = (evt, text) => {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = text;

  tooltip.style.visibility = "visible";
  tooltip.style.left = evt.pageX - 48 +'px';
  tooltip.style.top = evt.pageY - 40 + 'px';
}
const hideToolTip = () => {
  let tooltip = document.getElementById("tooltip");
  tooltip.style.visibility = "hidden";
}


const calendarCount = (arr) => {

  let y = 0;
  let day = 0;
  while(day <= arr.length) {
    for(let i = 0; i <= 72; i = i+12) {
      if(day < arr.length) {
        create_day(y, i, lesson_completed(arr[day]["completed"]), arr[day]["day"]);
      }
        day++;
      }
    y = y + 12;
  }
}

const lesson_completed = (bool) => {
  if (bool) {return "#96B874"};
  return "#ddd";
}
