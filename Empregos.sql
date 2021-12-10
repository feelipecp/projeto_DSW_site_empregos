drop database if exists empregos;
create database empregos;
use empregos;

create table if not exists vagas(
	idvaga int primary key not null auto_increment,
    titulo varchar(45) not null,
    area varchar(45) not null,
    empresa varchar(45),
    descricao varchar(1000) not null,
    cidade varchar(200) not null,
    salario varchar(45),
    created_at TIMESTAMP default current_timestamp
);

insert into vagas (titulo, area, empresa, descricao, cidade, salario) values("Analista de Logística Pleno", "Logística", "KORN FERRY INTERNATIONAL", 
"Conduzir e implementar novos projetos, sistemas e processos relacionados ao Supply Chain e Logística; Elaborar KPI's e controles de apuração de dados; Estudos de expansões, revisão de layouts e estruturas nos depósitos; Propor melhorias nos processos logísticos; Realizar pesquisas de mercado com foco em inovações e soluções em supply chain/depósitos; Requisitos Obrigatórios: Experiência na área logística ou supply chain; Atuação com implementações de projetos logísticos ou sistemas de gerenciamento de depósitos (WMS, TMS e WLM); Conhecimento em estruturas de depósitos (processos, máquinas e equipamentos); Pacote office completo Gestão e manuseio de BI (tableau ou similar) Formação superior completa Desejável pós graduação em Supply Chain com foco em logística Inglês Fluente", 
"Campinas / SP", "R$5.000,00");
insert into vagas (titulo, area, empresa, descricao, cidade, salario) values("Desenvolvedor", "TI", "Soluções TI", 
"Experiências e Habilidades - Arquitetura de sistemas; - Gestão de projetos; - Linguagens de programação (Java, Javascript, etc); - Inglês intermediário e/ou técnico; - Desenvolvimento Back End e Front End em ambientes de alto desempenho e escalabilidade; - Técnicas de desenvolvimento DDD, TDD, Clean Code, Serviços/Micro-serviços e padrões de arquitetura; - Tecnologias como React, APIs REST, Git, Soap, Docker, entre outras; - Metodologias Ágeis; - Bancos de dados relacionais e NoSQL; - Ambientes de nuvem. Perfil - Relacionamento interpessoal - Comunicação verbal e escrita - Autogerenciamento - Criatividade - Pro atividade - Foco no resultado - Raciocínio lógico - Senso de urgência", 
"Florianópolis/SC", "A combinar");
insert into vagas (titulo, area, empresa, descricao, cidade, salario) values("Analista de Sistemas JR", "TI", "IVENTIS TECNOLOGIA", 
"1 dia na semana presencial no Centro de SP , 4 dias remoto Requisitos Conhecimento em varejo. Conhecer banco de dados, Linux e ser analítico. Analista de Sistema Jr – – Escala Seg a Sex das 08:00 as 18:00 Requisito: Cursando ou superior completo em Tecnologia da Informação Conhecimento intermediário em Linux Conhecimento em banco de dados PL/SQL (SQL, Oracle) Conhecimento em sistemas de varejo Experiência de mais de 12 meses como analista Desejável: Conhecimento no sistema Zanthus, SisMoura e Protheus Conhecimento em SITEF Conhecimento em automação comercial Atividades: Realizar atendimento de 2 nível, por meio do acompanhamento dos chamados recebidos pelo sistema da companhia; Fazer o apoio a homologação de projetos, por meio de definição de processos Garantir integridade de integração entre sistemas Monitoramento de Sistemas por meio de monitores/alertas de sensores Setup de novas lojas Acompanhar/Aplicar GMUD dos sistemas", 
"São Paulo / SP", "R$2.500,00");
insert into vagas (titulo, area, empresa, descricao, cidade, salario) values("Assistente de vendas", "Verejo", "RHESERVA CONSULTORIA ", 
"Irá trabalhar a venda de produtos de revestimento e outros itens de construção. Trabalha com produtos diferenciados no mercado, com grande mix de produtos e grandes marcas. Trabalhará atendendo a clientes do varejo e também arquitetos, apresentando itens, realizando cálculo de utilização do material, gerando orçamentos e negociando a venda com foco no serviço e qualidade do produto. Buscando um atendimento diferenciado, há relacionamento dentro da loja e em redes sociais e outros meios digitais. É uma venda trabalhada consultivamente de forma a entender o objetivo e uso com o produto e oferecer mercadorias mais adequadas. O foco é na conversão e recompra do cliente, além do relacionamento pós-vendas. Requisitos: Segundo Grau Completo; Experiência em vendas de forma geral, com foco em vendas técnicas e consultivas.", 
"Conselheiro Lafaiete / MG", "R$2.000,00");