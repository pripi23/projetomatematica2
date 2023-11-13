// Funções para calcular o volume e a área de cada forma
function calcularVolumeCubo() {
    const lado = parseFloat(document.getElementById("cuboLado").value);
    const volume = Math.pow(lado, 3);
    document.getElementById("cuboResultado").textContent = `Volume do Cubo: ${volume}`;
}

function calcularAreaCubo() {
    const lado = parseFloat(document.getElementById("cuboLado").value);
    const area = 6 * Math.pow(lado, 2);
    document.getElementById("cuboResultado").textContent = `Área do Cubo: ${area}`;
}

function calcularVolumeParalelepipedo() {
    const comprimento = parseFloat(document.getElementById("paralelepipedoComprimento").value);
    const largura = parseFloat(document.getElementById("paralelepipedoLargura").value);
    const altura = parseFloat(document.getElementById("paralelepipedoAltura").value);
    const volume = comprimento * largura * altura;
    document.getElementById("paralelepipedoResultado").textContent = `Volume do Paralelepípedo: ${volume}`;
}

function calcularAreaParalelepipedo() {
    const comprimento = parseFloat(document.getElementById("paralelepipedoComprimento").value);
    const largura = parseFloat(document.getElementById("paralelepipedoLargura").value);
    const altura = parseFloat(document.getElementById("paralelepipedoAltura").value);
    const area = 2 * (comprimento * largura + comprimento * altura + largura * altura);
    document.getElementById("paralelepipedoResultado").textContent = `Área do Paralelepípedo: ${area}`;
}

function calcularVolumeEsfera() {
    const raio = parseFloat(document.getElementById("esferaRaio").value);
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    document.getElementById("esferaResultado").textContent = `Volume da Esfera: ${volume}`;
}

function calcularAreaEsfera() {
    const raio = parseFloat(document.getElementById("esferaRaio").value);
    const area = 4 * Math.PI * Math.pow(raio, 2);
    document.getElementById("esferaResultado").textContent = `Área da Esfera: ${area}`;
}

function calcularVolumeCone() {
    const raio = parseFloat(document.getElementById("coneRaio").value);
    const altura = parseFloat(document.getElementById("coneAltura").value);
    const volume = (1 / 3) * Math.PI * Math.pow(raio, 2) * altura;
    document.getElementById("coneResultado").textContent = `Volume do Cone: ${volume}`;
}

function calcularAreaCone() {
    const raio = parseFloat(document.getElementById("coneRaio").value);
    const altura = parseFloat(document.getElementById("coneAltura").value);
    const geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    const area = Math.PI * raio * (raio + geratriz);
    document.getElementById("coneResultado").textContent = `Área do Cone: ${area}`;
}

function calcularVolumeCilindro() {
    const raio = parseFloat(document.getElementById("cilindroRaio").value);
    const altura = parseFloat(document.getElementById("cilindroAltura").value);
    const area = 2 * Math.PI * raio * (raio + altura);
    document.getElementById("cilindroResultado").textContent = `Volume do Cilindro: ${volume}`;
}

function calcularAreaCilindro() {
    const raio = parseFloat(document.getElementById("cilindroRaio").value);
    const altura = parseFloat(document.getElementById("cilindroAltura").value);
    const volume = Math.PI * Math.pow(raio, 2) * altura;
    document.getElementById("cilindroResultado").textContent = `Área do Cilindro: ${area}`;
}
