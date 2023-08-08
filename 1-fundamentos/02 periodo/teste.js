const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const enviarEmail = (email) => {
    console.log(`email enviado a ${email}`);
  };

  emailListInData.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`e a sua posicao foi ${posicao} no total de ${array.length} pessoas`);
  });
