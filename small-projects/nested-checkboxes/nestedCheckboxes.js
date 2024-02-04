const parent = document.querySelector("#parent");
const children = document.querySelectorAll(".child");

parent.onclick = () => {
    for (let child of children) {
        child.checked = parent.checked;
    }
}

for (child of children) {
    child.onclick = () => {
        const checkedCount = document.querySelectorAll('input.child:checked').length;;
        console.log(checkedCount)
        if (checkedCount === children.length)
            parent.checked = true;
        else {
            parent.checked = false;
            if (checkedCount !== 0)
                parent.indeterminate = true
        }
    }
}