const passages = {
  1: {title:"Texto 1: A surpresa no quintal", text:"Era uma manhã de sábado quando Pedro resolveu brincar no quintal de sua avó. Enquanto procurava sua bola, percebeu um pequeno movimento perto de uma árvore.\n\nCurioso, aproximou-se devagar e encontrou um passarinho que havia caído do ninho. O pequeno animal parecia assustado e não conseguia voar.\n\nPedro chamou sua avó, que observou o passarinho com cuidado. Juntos, procuraram ajuda para garantir que ele recebesse os cuidados necessários.\n\nDepois daquele dia, Pedro passou a observar melhor a natureza e entendeu que os animais também precisam de proteção."},
  6: {title:"Texto 2: Uma campanha importante", poster:true},
  9: {title:"Texto 3: A bicicleta de Lucas", text:"Lucas ganhou uma bicicleta no aniversário e ficou muito feliz. Todos os dias, depois da escola, ele saía para passear na praça do bairro.\n\nCerto dia, encontrou seu amigo Rafael sentado em um banco.\n\n— Você não vai andar de bicicleta hoje? — perguntou Lucas.\n\n— Não posso. O pneu da minha bicicleta está furado — respondeu Rafael.\n\nLucas pensou por alguns segundos e teve uma ideia:\n\n— Podemos levar sua bicicleta para consertar. Depois, podemos passear juntos!\n\nRafael ficou animado com a proposta. Os dois foram até uma oficina e, enquanto aguardavam o conserto, conversaram sobre os passeios que fariam.\n\nNaquele dia, Lucas descobriu que compartilhar momentos com os amigos pode ser tão divertido quanto ganhar um presente."},
  14: {title:"Texto 4: A importância da leitura", text:"Texto A\nA leitura é uma atividade importante para o desenvolvimento das crianças. Por meio dos livros, podemos aprender palavras novas, conhecer diferentes lugares e desenvolver a imaginação.\n\nTexto B\nEu adoro ler livros de aventura! Minha parte favorita é quando os personagens enfrentam desafios e descobrem lugares misteriosos. Para mim, ler é uma das atividades mais divertidas que existem!"},
  16: {title:"Texto 5: Uma conversa engraçada", text:"João: Mãe, hoje tirei nota 10 na prova!\n\nMãe: Que maravilha, filho! Em qual matéria?\n\nJoão: Educação Física! Acertei o gol dez vezes!"},
  19: {title:"Texto 6: Um aviso importante", text:"AVISO!\n\nAtenção, estudantes!\n\nNa próxima sexta-feira, haverá uma feira de livros na escola.\n\nO evento acontecerá no pátio, das 8h às 11h.\n\nCada estudante poderá levar um livro para trocar com um colega.\n\nParticipe! Ler é descobrir novos mundos!\n\nDireção escolar"}
};
const questions = [
["Em qual dia da semana aconteceu a história?",["Domingo.","Segunda-feira.","Sábado.","Sexta-feira."],2],
["O que Pedro encontrou perto da árvore?",["Uma bola perdida.","Um passarinho que havia caído do ninho.","Um gato escondido.","Um brinquedo quebrado."],1],
["A expressão “Curioso, aproximou-se devagar” indica que Pedro estava:",["Com medo de sair de casa.","Interessado em descobrir o que estava acontecendo.","Com pressa para brincar.","Cansado de procurar a bola."],1],
["O que podemos concluir sobre Pedro ao final da história?",["Que ele deixou de brincar no quintal.","Que ele não gostava de animais.","Que ele aprendeu a importância de proteger os animais.","Que ele queria encontrar outro brinquedo."],2],
["Qual é o principal assunto do texto?",["A importância de cuidar e proteger os animais.","As brincadeiras realizadas no sábado.","A procura por brinquedos perdidos.","As árvores do quintal da avó."],0],
["Qual é a finalidade principal desse cartaz?",["Ensinar a plantar flores em vasos.","Divulgar uma festa na escola.","Incentivar atitudes de preservação ambiental.","Vender produtos recicláveis."],2],
["De acordo com o cartaz, qual atitude contribui para cuidar do meio ambiente?",["Desperdiçar água.","Separar o lixo para reciclagem.","Jogar lixo nos rios.","Cortar todas as árvores."],1],
["A frase “Pequenas atitudes fazem a diferença!” quer dizer que:",["Somente grandes ações ajudam o planeta.","As atitudes individuais não têm importância.","Ações simples também podem contribuir para preservar o meio ambiente.","Cuidar do planeta é responsabilidade apenas dos adultos."],2],
["Qual foi o presente que Lucas ganhou?",["Um skate.","Uma bola.","Uma bicicleta.","Um patinete."],2],
["Por que Rafael não podia andar de bicicleta?",["Porque estava chovendo.","Porque o pneu estava furado.","Porque estava atrasado.","Porque não sabia andar."],1],
["Qual foi o problema que deu início aos acontecimentos da história?",["Lucas perdeu sua bicicleta.","Rafael não encontrou a oficina.","A bicicleta de Rafael estava com o pneu furado.","Os amigos brigaram na praça."],2],
["No trecho “Rafael ficou animado com a proposta”, a palavra “animado” significa:",["Desanimado.","Entusiasmado.","Preocupado.","Irritado."],1],
["Qual ensinamento podemos retirar dessa história?",["Presentes são mais importantes que amizades.","Devemos brincar somente sozinhos.","A amizade e a companhia são importantes.","Não devemos ajudar nossos amigos."],2],
["Qual é o assunto em comum entre os dois textos?",["A importância da leitura.","Os cuidados com os livros.","As viagens de aventura.","As atividades escolares."],0],
["Qual é a principal diferença entre os textos?",["O Texto A apresenta informações sobre a leitura, enquanto o Texto B apresenta uma opinião pessoal.","O Texto A conta uma história de aventura e o Texto B ensina uma receita.","Os dois textos apresentam somente informações sobre viagens.","O Texto B apresenta uma notícia e o Texto A uma propaganda."],0],
["Por que a mãe ficou feliz com a notícia de João?",["Porque ele ganhou uma bicicleta.","Porque ele tirou nota 10.","Porque ele faltou à escola.","Porque ele terminou o dever de casa."],1],
["O humor do diálogo acontece porque:",["João não gosta de Educação Física.","A mãe pensou que ele estava falando de uma prova escrita, mas ele se referia aos gols.","João perdeu uma partida de futebol.","A mãe não conhece o significado da palavra prova."],1],
["No trecho “Que maravilha, filho!”, o ponto de exclamação indica:",["Dúvida.","Tristeza.","Entusiasmo.","Medo."],2],
["Qual é a finalidade desse texto?",["Contar uma história sobre livros.","Convidar os estudantes para uma feira de livros e informar sobre o evento.","Ensinar como escrever um livro.","Vender materiais escolares."],1],
["Onde acontecerá a feira de livros?",["Na biblioteca municipal.","Na sala dos professores.","No pátio da escola.","Na quadra do bairro."],2],
["O que cada estudante poderá fazer durante o evento?",["Levar um livro para trocar com um colega.","Levar brinquedos para vender.","Fazer uma apresentação musical obrigatória.","Comprar uniformes escolares."],0],
["No texto, a palavra “Entretanto” estabelece uma ideia de:",["Adição.","Oposição.","Explicação.","Conclusão."],1],
["Por que Mariana esperou a chuva diminuir?",["Porque não queria ir à escola.","Porque precisava terminar uma tarefa.","Porque estava chovendo muito forte.","Porque havia acordado tarde."],2],
["Na frase “Os alunos chegaram cedo à escola. Eles participaram de uma atividade de leitura”, a palavra “Eles” substitui:",["Os professores.","Os alunos.","As atividades.","As escolas."],1],
["A frase “Menino, feche a porta, por favor!” apresenta uma linguagem:",["Utilizada para dar uma orientação ou fazer um pedido.","Utilizada para contar uma notícia.","Utilizada para expressar uma dúvida.","Utilizada para fazer uma pergunta."],0]
];
const letters=["A","B","C","D"];
let current=0, answers=Array(questions.length).fill(null), student="", school="";
const $=id=>document.getElementById(id);
function showScreen(id){["start-screen","quiz-screen","result-screen"].forEach(x=>$(x).classList.toggle("hidden",x!==id));}
$("student-form").addEventListener("submit",e=>{e.preventDefault();student=$("student-name").value.trim();school=$("school-name").value.trim();if(!student)return;showScreen("quiz-screen");render();});
function passageFor(n){let key=[1,6,9,14,16,19].filter(k=>k<=n).pop();return passages[key];}
function render(){
 const q=questions[current], p=passageFor(current+1);
 $("question-counter").textContent=`Questão ${current+1} de 25`;
 $("question-kicker").textContent=`QUESTÃO ${String(current+1).padStart(2,"0")}`;
 $("question-text").textContent=q[0];
 const reading=$("reading-card");reading.classList.remove("hidden");
 if(p.poster){reading.innerHTML=`<h4>${p.title}</h4><div class="poster">CUIDE DO MEIO AMBIENTE!<br>Pequenas atitudes fazem a diferença!<br>🌳 Plante árvores!<br>♻️ Separe o lixo para reciclagem!<br>💧 Economize água!<br><br>O FUTURO DO PLANETA DEPENDE DE NÓS!</div>`;}
 else {reading.innerHTML=`<h4>${p.title}</h4><div>${escapeHtml(p.text).replace(/\n/g,"<br>")}</div>`;}
 $("options").innerHTML="";
 q[1].forEach((opt,i)=>{const b=document.createElement("button");b.type="button";b.className="option"+(answers[current]===i?" selected":"");b.innerHTML=`<span class="option-letter">${letters[i]}</span><span>${escapeHtml(opt)}</span>`;b.addEventListener("click",()=>{answers[current]=i;render();});$("options").appendChild(b);});
 $("prev-btn").disabled=current===0;$("prev-btn").style.opacity=current===0?".4":"1";
 $("next-btn").classList.toggle("hidden",current===24);$("finish-btn").classList.toggle("hidden",current!==24);
 $("answered-count").textContent=`${answers.filter(a=>a!==null).length} de 25 respondidas`;
 const done=answers.filter(a=>a!==null).length;const pct=Math.round(done/25*100);
 $("progress-fill").style.width=pct+"%";$("progress-label").textContent=pct+"% respondido";
 $("question-map").innerHTML="";
 questions.forEach((_,i)=>{const b=document.createElement("button");b.className="map-btn"+(answers[i]!==null?" done":"")+(i===current?" current":"");b.textContent=i+1;b.type="button";b.addEventListener("click",()=>{current=i;render();});$("question-map").appendChild(b);});
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("prev-btn").addEventListener("click",()=>{if(current>0){current--;render();}});
$("next-btn").addEventListener("click",()=>{if(current<24){current++;render();}});
$("finish-btn").addEventListener("click",finish);
function finish(){
 const correct=answers.reduce((n,a,i)=>n+(a===questions[i][2]?1:0),0),wrong=25-correct,pct=Math.round(correct/25*100);
 $("result-greeting").textContent=`${student}${school?" • "+school:""}, você concluiu as 25 questões. Confira seu desempenho:`;
 $("score-percent").textContent=pct+"%";$("correct-count").textContent=correct;$("wrong-count").textContent=wrong;
 $("result-message").textContent=pct>=80?"Excelente resultado! Continue lendo e praticando para avançar ainda mais.":pct>=60?"Bom trabalho! Revise as questões que errou e continue praticando.":"Este simulado é uma oportunidade de aprendizagem. Reveja os textos e tente novamente.";
 $("review-list").classList.add("hidden");$("review-btn").textContent="Revisar respostas";showScreen("result-screen");
}
$("review-btn").addEventListener("click",()=>{const list=$("review-list");if(!list.classList.contains("hidden")){list.classList.add("hidden");$("review-btn").textContent="Revisar respostas";return;}list.innerHTML="<h2>Revisão das questões</h2>"+questions.map((q,i)=>{const ok=answers[i]===q[2];return `<div class="review-item"><strong>Questão ${i+1}. ${escapeHtml(q[0])}</strong><span class="${ok?"good":"bad"}">${ok?"✓ Você acertou.":"✗ Você marcou "+(answers[i]===null?"nenhuma alternativa":letters[answers[i]]+". "+escapeHtml(q[1][answers[i]]))}</span><br><span>Resposta correta: <b>${letters[q[2]]}. ${escapeHtml(q[1][q[2]])}</b></span></div>`;}).join("");list.classList.remove("hidden");$("review-btn").textContent="Ocultar revisão";});
$("restart-btn").addEventListener("click",()=>{current=0;answers=Array(25).fill(null);$("student-name").value=student;$("school-name").value=school;showScreen("quiz-screen");render();});
