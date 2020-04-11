function ColorBySkillPercent (percent) {
  let total = percent / 100

  if (total <= 0.4) return 'orange'
  if (total >= 0.41 && total <= 0.7) return 'blue'
  if (total >= 0.71) return 'green'
}

export default ColorBySkillPercent;
