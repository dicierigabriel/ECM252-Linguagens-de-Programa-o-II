import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  cursos = [
    {
      titulo: 'Administração',
      descricao:
        'Se você pensa em ser um administrador de empresas, quer fundar sua própria empresa e ser um empreendedor, ou mesmo liderar equipes de ponta em uma grande corporação, o começo da sua trajetória passa pela Mauá.',
      imagem: 'https://maua.br/img/upload/092018/administracao-14102942.png',
    },

    {
      titulo: 'Design',
      descricao:
        'O curso de Design da Mauá, oferecido desde 2007, possui nota máxima no MEC, tem conquistado seu espaço no mundo acadêmico e já deixa sua marca de qualidade no mercado.',
      imagem: 'https://maua.br/img/upload/092018/design-14102950.png',
    },

    {
      titulo: 'Engenharia de Alimentos',
      descricao:
        'Quer um curso de Engenharia de Alimentos que te ensina o conteúdo na prática durante toda a graduação? A Mauá oferece a melhor infraestrutura para você.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-alimentos-14103003.png',
    },

    {
      titulo: 'Engenharia Civil',
      descricao:
        'Quer fazer diferença no mercado e na sociedade sendo formado em Engenharia Civil? Conheça o curso da Mauá!',
      imagem: 'https://maua.br/img/upload/092018/engenharia-civil-14103012.png',
    },

    {
      titulo: 'Engenharia de Computação',
      descricao:
        'A Engenharia de Computação está presente em nosso dia a dia e nas mais diversas áreas: Educação, Indústrias, Redes de Comunicação e Dispositivos Móveis, Transportes, Entreterimento, entre outras.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-computacao-14103023.png',
    },

    {
      titulo: 'Engenharia de Controle e Automação',
      descricao:
        'Você está procurando uma graduação em Engenharia de Controle e Automação que o destaque no mercado de trabalho. Conheça o curso oferecido pela Mauá!',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-controle-automacao-14103035.png',
    },

    {
      titulo: 'Engenharia Elétrica',
      descricao:
        'A Engenharia Elétrica está no nosso cotidiano, presente nas diversas áreas industriais, em Sistemas de Transporte, na Automação instalações elétricas prediais e comerciais, entre outras.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-eletrica-14103052.png',
    },

    {
      titulo: 'Engenharia Eletrônica',
      descricao:
        'A Engenharia Eletrônica está em nosso cotidiano, presente nas mais diversas áreas: Comunicação, Transporte, Sistemas Computadorizados, Controle de Processos, Entretenimento, Segurança, Automação Predial e Industrial, Indústria de Eletrodomésticos e Equipamentos Médicos, entre muitas outras.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-eletronica-14103106.png',
    },

    {
      titulo: 'Engenharia Mecânica',
      descricao:
        'A graduação em Engenharia Mecânica é uma das mais abrangentes modalidades da Engenharia. Ela trata de tudo o que se move, de brinquedos a fábricas (com tudo o que está dentro), passando por eletrodomésticos, embarcações, veículos etc.',
      imagem:
        'https://maua.br/img/upload/102018/engenharia-mecanica-18154700.png',
    },

    {
      titulo: 'Engenharia de Produção',
      descricao:
        'Infraestrutura de ponta, profissionais reconhecidos num curso bem-conceituado. Essa é a graduação em Engenharia de Produção da Mauá, ideal para um futuro de sucesso!',
      imagem:
        'https://maua.br/img/upload/102018/engenharia-producao-18154849.png',
    },

    {
      titulo: 'Engenharia Química',
      descricao:
        'Essa é a área mais abrangente da Engenharia e compreende todas as etapas de criação, desenvolvimento, melhoramento e aplicação dos processos químicos e bioquímicos e dos seus produtos.',
      imagem:
        'https://maua.br/img/upload/092018/engenharia-quimica-14103146.png',
    },
  ];

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
    }
}
