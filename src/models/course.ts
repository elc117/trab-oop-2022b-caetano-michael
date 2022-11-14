import IIndex from '../Types/IIndex'
import LinkContent from './linkContent'
import Module from './modulo'
import TextContent from './textContent'
import VideoContent from './videoContent'

class Course {
  modules: Module[]
  index: number
  constructor() {
    this.modules = []
    this.index = 0
    this.createModules()
  }

  private createModules() {
    let module, content
    module = new Module('O que é educação financeira')
    module.setDescription('Uma breve introdução sobre o que é educação financeira e sua importância para a vida de qualquer pessoa.')
    content = new TextContent('Parte 1')
    content.setDescription('Se engana quem pensa que o termo educação financeira se refere a estudos, cursos, palestras e muita teoria. Na verdade, educação financeira vai além: tem a ver com organizar as finanças, saber o quanto ganha e gasta, planejar as contas e pensar no futuro.')
    module.addContent(content)
    content = new TextContent('Parte 2')
    content.setDescription('Segundo a Organização para Cooperação e Desenvolvimento Econômico (OCDE), o conceito de educação financeira é o processo que permite melhorar a compreensão em relação aos produtos e serviços financeiros, dando a capacidade de se fazerem escolhas de forma mais consciente. Ou, em outras palavras, educação financeira é a habilidade de entender como o dinheiro funciona.')
    module.addContent(content)
    content = new TextContent('Parte 3')
    content.setDescription('É bom lembrar que nunca é tarde para começar a se organizar financeiramente. Ter controle do seu dinheiro e ter uma quantia guardada para lidar com imprevistos e realizar seus sonhos (seja uma roupa nova, uma viagem… começar uma faculdade, morar sozinho, ou caminhar para adquirir sua casa própria) são as vantagens de fazer um planejamento pessoal.')
    module.addContent(content)
    content = new TextContent('Parte 4')
    content.setDescription('Na prática, esse plano funciona como um controle do que entra e sai nas suas finanças e ajuda a tomar decisões mais assertivas. Como por exemplo, decidir se uma compra é realmente necessária. Ter uma planilha pode ajudar – e muito. Registrar tudo permite que você saiba para onde está indo o seu dinheiro.')
    module.addContent(content)
    this.modules.push(module)
    module = new Module('Como ter uma educação financeira?')
    module.setDescription('Primeiros passos para alcançar uma educação financeira adequada ao seu estilo de vida.')
    content = new TextContent('Parte 1')
    content.setDescription('Não existe uma fórmula mágica para ter educação financeira. Ela é um processo e um aprendizado. O primeiro passo é entender como e com o que você gasta. Além disso, é importante que esses gastos caibam em sua renda. Entendendo isso, você pode se organizar para começar a guardar dinheiro e, portanto, começar a fazer novos planos e metas. Coloque em uma planilha o salário, os gastos no cartão de crédito e as contas fixas (aluguel, água, luz, mercado, internet). Dessa forma, o controle fica mais fácil.')
    module.addContent(content)
    content = new TextContent('Parte 2')
    content.setDescription('Para  você conseguir equilibrar seus ganhos e gastos é sempre importante lembrar que devemos gastar menos do que recebemos!!')
    module.addContent(content)
    content = new VideoContent('Aqui vai uma dica de como organizar suas finanças')
    content.setDescription('https://youtu.be/nPLGM4Hg8uQ')
    module.addContent(content)
    content = new TextContent('Parte 3')
    content.setDescription('Estabelecer metas de curto, médio e longo prazo é uma prática importante. Ter objetivos é essencial para se manter motivado. As pequenas conquistas de curto prazo podem servir como incentivo para alcançar as metas consideradas de longo prazo.')
    module.addContent(content)
    content = new TextContent('Parte 4')
    content.setDescription('Tenha uma reserva de emergência! Imprevistos acontecem (doenças, viagem de última hora, compromisso familiar, reparos em casa e etc) por isso, ter um dinheiro guardado pode evitar que você tenha dor de cabeça em momentos como esse. Esse nem sempre é um processo fácil, mas vale começar com o quanto você puder. No geral, a maioria dos analistas financeiros recomenda que a reserva de emergência seja equivalente a seis salários. Mas não se preocupe se não for. O importante mesmo é começar para que, no caso de um imprevisto acontecer, você ter uma quantia para não passar apuro.')
    module.addContent(content)
    content = new VideoContent('Veja mais...')
    content.setDescription('https://youtu.be/IR63GWaGmes')
    module.addContent(content)
    this.modules.push(module)
    module = new Module('Conceitos básicos')
    module.setDescription('Alguns conceitos importantes sobre as formas de pagamentos mais comuns')
    content = new TextContent('Cartão de débito')
    content.setDescription('O cartão de débito funciona como um meio de pagamento ligado diretamente com sua conta corrente ou conta poupança. Para isso, é importante se atentar para o saldo que você possui em sua conta, pois diferente do cartão de crédito, o pagamento via cartão de débito é feito exatamente no momento da compra.')
    module.addContent(content)
    content = new TextContent('Cartão de crédito - parte 1')
    content.setDescription('O cartão de crédito é uma forma de pagamento de serviços ou produtos que conta com um limite de crédito pré-definido. Ou seja, é uma espécie de empréstimo concedido por uma instituição financeira ou de pagamento responsável pela emissão do cartão.')
    module.addContent(content)
    content = new TextContent('Cartão de crédito - parte 2')
    content.setDescription('Ele funciona basicamente assim: a instituição financeira emissora do cartão estabelece um limite de crédito que poderá ser utilizado pelo portador do cartão. Este, por sua vez, se compromete a pagar o valor utilizado na data de vencimento previamente combinada. Caso o pagamento não seja feito dentro do prazo, o portador terá que arcar com altos juros, além da multa por atraso.')
    module.addContent(content)
    content = new LinkContent('Cartão de crédito - extra')
    content.setDescription('https://economia.uol.com.br/noticias/redacao/2019/12/27/cartao-de-credito-como-funciona-vantagens-riscos.htm')
    module.addContent(content)
    content = new TextContent('Cheque especial')
    content.setDescription('O cheque especial funciona como uma espécie de “empréstimo automático”. Quando o correntista utiliza todo o saldo da sua conta bancária, o banco empresta automaticamente um valor pré-aprovado para que ele possa continuar consumindo. E, como em qualquer empréstimo, há cobranças para o uso desse montante.')
    module.addContent(content)
    content = new TextContent('Talão de cheque')
    content.setDescription('Os cheques servem para movimentar o saldo disponível na conta. Eles funcionam como forma de pagamento, pois é como se o cliente assinasse de que o recebedor poderá resgatar aquele valor junto ao banco. Na prática, o cheque é uma ordem de pagamento, ou seja, uma espécie de autorização para que determinada importância seja paga ao portador do documento.). Os cheques se destinam a pagamentos à vista.')
    module.addContent(content)
    content = new VideoContent('PIX')
    content.setDescription('https://youtu.be/LCdKOkFjN7c')
    module.addContent(content)
    this.modules.push(module)
    module = new Module('Investimentos')
    module.setDescription('Uma prévia do que você pode encontrar se seguir explorando o mundo da educação financeira')
    content = new TextContent('Parte 1')
    content.setDescription('Agora que você já sabe um pouco mais sobre educação financeira, e já pode até estar pensando em investir o dinheiro que conseguir economizar, saiba que ela é a junção dos dois e pode te proporcionar um futuro bem mais tranquilo.')
    module.addContent(content)
    content = new TextContent('Parte 2')
    content.setDescription('Antes de continuar, você sabe o que é investimento? De forma resumida, investimento é pegar uma quantia hoje e tentar transformá-la em mais dinheiro no futuro. E, se engana quem pensa que para começar investir é preciso já ter muito dinheiro. Isso não poderia estar mais errado: qualquer um pode investir, não importa a quantia que tenha.')
    module.addContent(content)
    content = new TextContent('Parte 3')
    content.setDescription('Como você pode iniciar? É muito importante ter em mente que os investimentos dão retorno a médio e longo prazo. Ou seja, não espere ganhar muito dinheiro de um dia para o outro. O investimento precisa se tornar um hábito. Separe uma quantia por mês, ainda que um valor pequeno. Procure uma instituição financeira e analise as opções que ela oferece para investir seu dinheiro de acordo com seu perfil de investidor.')
    module.addContent(content)
  }

  getIndex(): IIndex[] {
    return this.modules.map((module, idx) => ({ id: idx, title: module.title }))

  }

  getModule(id: number): Module {
    return this.modules[id]
  }
}

export default new Course()