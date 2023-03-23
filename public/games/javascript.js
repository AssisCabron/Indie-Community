fetch('/data/jogos.json')
  .then(response => response.json())
  .then(data => {
    const jogosContainer = document.getElementById('jogos-container');

    data.jogos.forEach(jogo => {
      const divJogo = document.createElement('div');
      divJogo.classList.add('jogo');

      const imgJogo = document.createElement('img');
      imgJogo.src = jogo.imagem;
      divJogo.appendChild(imgJogo);

      const h2Jogo = document.createElement('h2');
      h2Jogo.innerText = jogo.nome;
      divJogo.appendChild(h2Jogo);

      const btnSaberMais = document.createElement('button');
      btnSaberMais.classList.add('btn');
      btnSaberMais.innerText = 'Saber mais';
      btnSaberMais.addEventListener('click', () => {
        alert(jogo.descricao);
      });
      divJogo.appendChild(btnSaberMais);

      jogosContainer.appendChild(divJogo);
    });
  })
  .catch(error => console.log(error));
