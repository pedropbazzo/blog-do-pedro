import md5 from 'blueimp-md5'

export function getGravatarURL({ email, size, defaultURL = 'identicon' }) {
  let hash = md5(email.toLowerCase().trim())
  return `https://media-exp1.licdn.com/dms/image/C4D03AQGJjXff93uMvQ/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=LQfa07Uo68uftxsWqBTCUiw6e71DYzdLm4Qx2XTcZck`
}
