const toggle = document.querySelector('.customize');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
})

const inputs = document.querySelectorAll('.control input');

function handleChange(){
    console.log(this.value)
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input=>input.addEventListener('mousemove',handleChange));
inputs.forEach(input=>input.addEventListener('change',handleChange));
