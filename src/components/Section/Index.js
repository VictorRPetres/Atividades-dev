import React from "react";
import Card from "../Card/Index";
import { Highlight, Info } from "../Card/styles";
import SubTitle from "../SubTitle/Index";
import Title from "../Title/Index";
import { SectionHeading } from "../Title/styles";
import { Sections } from "./styles";
import { BsLinkedin, BsGithub, BsAward } from "react-icons/bs";

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá, o Meu Nome é " />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{" "}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>
        {profile.biografia}
        <BsAward />
      </p>
    </Sections>
    <Sections id="contacts">
      <Title texto="Contatos" />
      <p>
        <SubTitle texto="Links para minhas Redes Sociais" />
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/victor-resende-petres-001377129/"
          target="_blank"
          rel="noreferrer noopener"
          title="Linkedin"
        >
          <Highlight>
            <BsLinkedin />
            {profile.lin}
          </Highlight>
        </a>
      </p>
      <p>
        <a
          href="https://github.com/VictorRPetres"
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <Highlight>
            <BsGithub />
            {profile.git}
          </Highlight>
        </a>
      </p>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>

    <Sections id="skills">
      <Title texto="Habilidades" />
      <p>
        <SubTitle texto="Minhas habilidades desenvolvidas no decorrer da faculdade." />
      </p>
      <p>{profile.habilidade.programacao}</p>
      <p>{profile.habilidade.analise}</p>
      <p>{profile.habilidade.bdd}</p>
      <p>{profile.habilidade.web}</p>
    </Sections>

    <Sections id="projects">
      <Title texto="Projetos" />
      <SubTitle texto="Currículo DEV" />
      <p>{profile.habilidade.curriculodev}</p>
    </Sections>
  </>
);

export default Section;
