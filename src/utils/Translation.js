export function types(item) {
  const tipos = {
    water: "água",
    normal: "normal",
    fighting: "luta",
    flying: "voo",
    poison: "veneno",
    ground: "terra",
    rock: "rocha",
    bug: "bicho",
    ghost: "fantasma",
    steel: "aço",
    fire: "fogo",
    grass: "grama",
    electric: "elétrico",
    psychic: "psíquico",
    ice: "gelo",
    dragon: "dragão",
    dark: "sombrio",
    fairy: "mágico",
    unknown: "desconhecido",
    shadow: "sombrio",
  };

  return tipos[item];
}