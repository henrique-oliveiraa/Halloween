const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Função para desenhar a base da abóbora
function drawPumpkin() {
    ctx.fillStyle = '#f37a1f';
    ctx.beginPath();
    ctx.ellipse(150, 150, 100, 130, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Função para adicionar características (olhos, boca, nariz)
function addFeature(feature) {
    ctx.fillStyle = 'black';
    if (feature === 'eyes') {
        ctx.beginPath();
        ctx.ellipse(110, 80, 15, 40, Math.PI / 8, 0, Math.PI * 2);
        ctx.ellipse(190,80, 15, 40, -Math.PI / 8, 0, Math.PI * 2);
        ctx.fill();
    } else if (feature === 'mouth') {
        ctx.beginPath();
        ctx.arc(150, 180, 40, 0, Math.PI, false);
        ctx.lineTo(110, 180);
        ctx.fill();
    } else if (feature === 'nose') {
        ctx.beginPath();
        ctx.moveTo(140, 130);
        ctx.lineTo(150, 150);
        ctx.lineTo(160, 130);
        ctx.fill();
    }
}

// Função para aplicar efeitos especiais
function applyEffect(effect) {
    if (effect === 'glow') {
        ctx.shadowColor = '#ffaa00';
        ctx.shadowBlur = 20;
    } else if (effect === 'shadow') {
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 10;
    }
    drawPumpkin();
}

// Função para salvar a abóbora como imagem
function saveImage() {
    const link = document.createElement('a');
    link.download = 'minha-abobora.png';
    link.href = canvas.toDataURL();
    link.click();
}

// Inicialização
drawPumpkin();
