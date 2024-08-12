let sendBtn = document.querySelector('.btn')

let userNum = document.querySelector('.userNum')
let userAge = document.querySelector('.userAge')


const url  = 'https://dummyjson.com/users'



sendBtn.addEventListener('click', e => {
  e.preventDefault()

  const number = userNum.value
  const age = userAge.value

  const res =  async (url) => {
    const response = await fetch(url) 
    const data = await response.json()
    return render(data, age, number)
  }

  res(url)

  userNum.value = ''
  userAge.value = ''
})


function render(arr, age, number) {
    const container = document.querySelector('.userContainer');
    container.innerHTML = '';
  
    const users = arr.users;
    const cardNum = users.slice(0, number);
    const cardAge = cardNum.filter(item => item.age > age);
  
    cardNum.forEach(user => {
        const card1 = document.createElement('div');
        card1.className = 'userCard1';
        card1.innerHTML = `
          <h3>${user.firstName} ${user.lastName}</h3>
          <p>Age: ${user.age}</p>
          <p>Email: ${user.email}</p>
        `;
        container.appendChild(card1);
      });

    cardAge.forEach(user => {
      const card = document.createElement('div');
      card.className = 'userCard';
      card.innerHTML = `
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Age: ${user.age}</p>
        <p>Email: ${user.email}</p>
      `;
      container.appendChild(card);
    });
  }
  