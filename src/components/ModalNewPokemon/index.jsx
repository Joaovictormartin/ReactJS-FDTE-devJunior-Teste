import React, { useCallback } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";

import cameraButtonImg from "../../assets/img/CameraButton.png";
import shieldImg from "../../assets/img/shield.png"; //escudo
import swordImg from "../../assets/img/sword.png"; //espada
import speedImg from "../../assets/img/speed.png"; //velocidade

import getValidationErrors from "../../utils/getValidationErrors";
import { Input } from "./components/Input";
import { Picker } from "./components/Picker";
import { InputNumber } from "./components/InputNumber";
import { types } from "../../utils/Translation";

import {
  pokemonModalOverlay,
  pokemonModalContent,
  Container,
  ButtonCloseModal,
  WraperBottom,
  ImagemAvatar,
  SeparatorName,
  ButtonCreatePokemon,
} from "./styles";

export function ModalNewPokemon({
  data,
  isOpen,
  setPokebolas,
  onRequestClose,
  arryPokemon = [],
  isEdit = false,
}) {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("O campo nome é obrigatório.")
      .max(255, "O campo nome está inválido."),
    hp: Yup.string()
      .required("O campo HP é obrigatório.")
      .max(255, "O campo HP está inválido."),
    weight: Yup.string()
      .required("O campo peso é obrigatório.")
      .max(255, "O campo peso está inválido."),
    height: Yup.string()
      .required("O campo altura é obrigatório.")
      .max(255, "O campo altura está inválido."),

    type: Yup.string().required("O campo tipo é obrigatório."),

    abiliity01: Yup.string()
      .required("O campo habilidade 1 é obrigatório.")
      .max(255, "O campo habilidade 1 está inválido."),
    abiliity02: Yup.string()
      .required("O campo habilidade 2 é obrigatório.")
      .max(255, "O campo habilidade 2 está inválido."),
    abiliity03: Yup.string()
      .required("O campo habilidade 3 é obrigatório.")
      .max(255, "O campo habilidade 3 está inválido."),
    abiliity04: Yup.string()
      .required("O campo habilidade 4 é obrigatório.")
      .max(255, "O campo habilidade 4 está inválido."),

    defense: Yup.string()
      .required("O campo defesa é obrigatório.")
      .max(255, "O campo defesa está inválido."),
    attack: Yup.string()
      .required("O campo ataque é obrigatório.")
      .max(255, "O campo ataque está inválido."),
    specialDefense: Yup.string()
      .required("O campo defesa especial é obrigatório.")
      .max(255, "O campo defesa especial está inválido."),
    specialAttack: Yup.string()
      .required("O campo ataque especial é obrigatório.")
      .max(255, "O campo ataque especial está inválido."),
    velocity: Yup.string()
      .required("O campo velocidade é obrigatório.")
      .max(255, "O campo velocidade está inválido."),
  });

  const handleSubmitPokemon = useCallback(
    async (data, { resetForm, setSubmitting, setErrors }) => {
      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        resetForm({});
        setSubmitting(true);
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErrors(e);
          setErrors(errors);
          return;
        }
      }
    }
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      ariaHideApp={false}
      style={{
        content: pokemonModalContent,
        overlay: pokemonModalOverlay,
      }}
    >
      <Container>
        <ButtonCloseModal onClick={() => onRequestClose()} />

        <WraperBottom>
          <ImagemAvatar onClick={() => console.log("foto")}>
            <img src={cameraButtonImg} />
          </ImagemAvatar>

          <Formik
            initialValues={{
              name: "",
              hp: "",
              weight: "",
              height: "",
              type: "",
              abiliity01: "",
              abiliity02: "",
              abiliity03: "",
              abiliity04: "",
              defense: "",
              attack: "",
              specialDefense: "",
              specialAttack: "",
              velocity: "",
            }}
            onSubmit={handleSubmitPokemon}
            validationSchema={schema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <Input
                  label="Nome"
                  placeholder="Nome"
                  value={values.name}
                  error={errors.name}
                  onChange={handleChange("name")}
                />

                <InputNumber
                  label="Hp"
                  placeholder="HP"
                  value={values.hp}
                  error={errors.hp}
                  unity="kg"
                  onChange={handleChange("hp")}
                  onChangeInc={(values) => console.log('asd')}
                />

                <InputNumber
                  label="Peso"
                  placeholder="Peso"
                  value={values.weight}
                  error={errors.weight}
                  unity="kg"
                  onChange={handleChange("weight")}
                />

                <InputNumber
                  label="Altura"
                  placeholder="Altura"
                  value={values.height}
                  error={errors.height}
                  unity="Cm"
                  onChange={handleChange("height")}
                />

                <SeparatorName>
                  <span />
                  <h2>Tipo</h2>
                  <span />
                </SeparatorName>

                <Picker
                  error={errors.type}
                  value={values.type}
                  on={values.type}
                />

                <SeparatorName>
                  <span />
                  <h2>Habilidade</h2>
                  <span />
                </SeparatorName>

                <Input
                  placeholder="Habilidade 1"
                  value={values.abiliity01}
                  error={errors.abiliity01}
                  onChange={handleChange("abiliity01")}
                />

                <Input
                  placeholder="Habilidade 2"
                  value={values.abiliity02}
                  error={errors.abiliity02}
                  onChange={handleChange("abiliity02")}
                />

                <Input
                  placeholder="Habilidade 3"
                  value={values.abiliity03}
                  error={errors.abiliity03}
                  onChange={handleChange("abiliity03")}
                />

                <Input
                  placeholder="Habilidade 4"
                  value={values.abiliity04}
                  error={errors.abiliity04}
                  onChange={handleChange("abiliity04")}
                />

                <SeparatorName>
                  <span />
                  <h2>Estatísticas</h2>
                  <span />
                </SeparatorName>

                <InputNumber
                  icon={shieldImg}
                  label="Defesa"
                  placeholder="00"
                  value={values.defense}
                  error={errors.defense}
                  onChange={handleChange("defense")}
                />

                <InputNumber
                  icon={swordImg}
                  label="Ataque"
                  placeholder="00"
                  value={values.attack}
                  error={errors.attack}
                  onChange={handleChange("attack")}
                />

                <InputNumber
                  icon={shieldImg}
                  label="Defesa especial"
                  placeholder="00"
                  value={values.specialDefense}
                  error={errors.specialDefense}
                  onChange={handleChange("specialDefense")}
                />

                <InputNumber
                  icon={swordImg}
                  label="Ataque especial"
                  placeholder="00"
                  value={values.specialAttack}
                  error={errors.specialAttack}
                  onChange={handleChange("specialAttack")}
                />

                <InputNumber
                  icon={speedImg}
                  label="Velocidade"
                  placeholder="00"
                  value={values.velocity}
                  error={errors.velocity}
                  onChange={handleChange("velocity")}
                />

                <ButtonCreatePokemon onClick={handleSubmit}>
                  Criar pokemon
                </ButtonCreatePokemon>
              </>
            )}
          </Formik>
        </WraperBottom>
      </Container>
    </Modal>
  );
}