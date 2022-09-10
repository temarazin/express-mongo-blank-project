module.exports = {
  error: {
    badRequest: {
      default: 'Некорректные данные в запросе',
    },
    unauthorized: {
      default: 'Необходима авторизация',
    },
    forbidden: {
      default: 'Недостаточно прав',
    },
    notFound: {
      default: 'Ресурс не найден',
    },
    conflict: {
      default: 'Запрос не может быть исполнен',
    },
    serverError: {
      default: 'Что-то пошло не так',
    },
  },
  success: {
    default: 'Запрос выполнен',
  },
  validation: {
    common: {
      makeErrorMsg: (field, err) => `Поле [${field}] ${err}`,
      require: 'является обязательным',
      invalidFormat: 'не соотвествует формату',
      isEmpty: 'не должно быть пустым',
      isNotString: 'не является строкой',
      isNotNumber: 'не является числом',
      isNotInteger: 'не является целым числом',
      isNotEmail: 'не является E-mail\'ом',
      isNotUrl: 'не является валидным url-адресом',
      isNotHex: 'не является hex-строкой',
    },
  },
};
