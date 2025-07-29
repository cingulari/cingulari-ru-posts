---
layout: 'base.njk'
date: 2025-07-29
---

# Синхронизация через git

Окей, а как это вообще работать-то должно? Разберемся. Git, понятное дело, предполагается уже только-только установленным.
`ssh-keygen -t rsa`
>Создаем ключи, забираем публичный на гитхаб

`git config --global user.name "username username"`
>Устанавливаем свое имя/погоняло в конфиге

`git config --global user.email example@sus.com`
>Устанавливаем свое мыло в конфиге

`git clone https://github.com/cingulari/cingulari-ru-posts.git`
>Копируем себе репозиторий


