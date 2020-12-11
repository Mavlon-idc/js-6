function parserUsers(data){
    console.log(data);
    for (const key in data) {
        const { name, username, email,
            address: {street, suite, city, zipcode,
                geo: {lat, lng}},
            phone, website,
            company: { name: companyName, catchPhrase, bs }} = data[key]

            userName = `Пользователь ${name}`,
            userUserName = `Ник данного пользователя ${username}`,
            userEmail = `У ${name} Электронная почта ${email}`,
            userPhone = `С ${username} можно связаться по телефону ${phone}`,
            userWebsite = `Для полной информации посетите сайт данного пользователя ${website}`,
            userAddress = `${name} живёт на улице ${street} в городе ${city} в дома ${suite}, почтовый индекс ${zipcode}\nТакже вы сможете найти его на карте долгота ${lat}, а широта ${lng}`,
            userCompany = `работает в компании ${companyName} \nВ области ${catchPhrase}\nЗанимается на этой работе ${bs}`,

            profileInfo = `${userName} \n${userUserName} \n${userEmail} \n${userPhone} \n${userWebsite} \n${userAddress} \n${userCompany}`

            console.log(profileInfo);
            
        }
    }

