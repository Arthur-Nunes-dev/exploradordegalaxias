// acessa as tegs <p>
const merBot = document.getElementById('mercurio')
const venBot = document.getElementById('venus')
const terBot = document.getElementById('terra')
const marBot = document.getElementById('marte')
const jupBot = document.getElementById('jupiter')
const satBot = document.getElementById('saturno')
const uraBot = document.getElementById('urano')
const netBot = document.getElementById('netuno')

// acessa os dialogos
const infOk = document.getElementById('inf-ok')
const infMer = document.getElementById('inf-mer')
const infVen = document.getElementById('inf-ven')
const infTer = document.getElementById('inf-ter')
const infMar = document.getElementById('inf-mar')
const infJup = document.getElementById('inf-jup')
const infSat = document.getElementById('inf-sat')
const infUra = document.getElementById('inf-ura')
const infNet = document.getElementById('inf-net')

// acessa os botoes ok para fechar o dialogo
const ok = document.getElementById('ok')
const cloMer = document.getElementById('clo-mer')
const cloVen = document.getElementById('clo-ven')
const cloTer = document.getElementById('clo-ter')
const cloMar = document.getElementById('clo-mar')
const cloJup = document.getElementById('clo-jup')
const cloSat = document.getElementById('clo-sat')
const cloUra = document.getElementById('clo-ura')
const cloNet = document.getElementById('clo-net')

// abre os dialogos quando clica no nome
merBot.onclick = function () {
    infMer.showModal()
}
venBot.onclick = function () {
    infVen.showModal()
}
terBot.onclick = function () {
    infTer.showModal()
}
marBot.onclick = function () {
    infMar.showModal()
}
jupBot.onclick = function () {
    infJup.showModal()
}
satBot.onclick = function () {
    infSat.showModal()
}
uraBot.onclick = function () {
    infUra.showModal()
}
netBot.onclick = function () {
    infNet.showModal()
}

// fecha o dialogo quando clica no ok
ok.onclick = function () {
    infOk.close()
}
cloMer.onclick = function () {
    infMer.close()
}
cloVen.onclick = function () {
    infVen.close()
}
cloTer.onclick = function () {
    infTer.close()
}
cloMar.onclick = function () {
    infMar.close()
}
cloJup.onclick = function () {
    infJup.close()
}
cloSat.onclick = function () {
    infSat.close()
}
cloUra.onclick = function () {
    infUra.close()
}
cloNet.onclick = function () {
    infNet.close()
}