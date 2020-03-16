var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://app.flowaccount.com/CompanyAdmin/th/Invoice/CheckForInformationUpdates',
  'headers': {
    'accept': ' application/json, text/plain, */*',
    'accept-encoding': ' gzip, deflate, br',
    'accept-language': ' en-US,en;q=0.9',
    'content-length': ' 46',
    'content-type': ' application/json;charset=UTF-8',
    'cookie': ' freeTrialNotifications=84; ASP.NET_SessionId=4brwi20ww1qvwnyrjmfdaba0; _gcl_au=1.1.349056796.1583827616; _ga=GA1.2.1088316457.1583827616; _fbp=fb.1.1583827616522.51606123; culture=th; hubspotutk=06cc377dbb74479aef75c7b7b9c0595c; __hssrc=1; __RequestVerificationToken=kBh6ydYnqcMmgHySwEpsqNa53lBGu71AsgurTsuGo0PWvujJhWUzjnHWu5wuo7V1lgnTNYKkYmSH96s_QrjNkfU2czxNb9U_9YxJlloE2Cc1; _gid=GA1.2.487639642.1584300806; __hstc=225320709.06cc377dbb74479aef75c7b7b9c0595c.1583827620793.1584384037740.1584387522677.11; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%22561845%22%2C%22%24device_id%22%3A%20%22170c37bc16483a-0f2d445503e08d-4313f6a-1fa400-170c37bc165b92%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fauth.flowaccount.com%2Fconnect%2Fauthorize%3Fclient_id%3Dflowaccount-mvc%26redirect_uri%3Dhttps%253a%252f%252fapp.flowaccount.com%252f%26response_mode%3Dform_post%26response_type%3Dcode%2Bid_token%26scope%3Dopenid%2Bflowaccount-api%2Boffline_access%2Btenant%26state%3DOpenIdConnect.AuthenticationProperties%253dxi5nSYxTpVFFEyEC7liTGu9vllDakPkYX9RtDkSz5wSsAVU3cu5pTgvH7uCGNZlr_OQLtXiFu1cbU5zplhkQnMO_rcVE8c9SFPaUMVtdR_K-6Y5GCtTClDLcx-ReX8ryd3WKOijg6324TrsuY3h18bpNAPjPdkOt_dA_J5eVmVewT3-B4ZYvuVSX5X4G1scoTBaIt_h3CnQzLFq_c-hgCOYwQQo-okRObrBIiFwmg9s%26nonce%3D637194244308452583.MTczMDE0MDctNjExYy00ZTZiLWE2NmQtNzM3MWFhYTc2MTcxODNlYTFiOGItMjkwNy00YjYzLTk0ZGYtYzJlN2ExYTQxYjk1%22%2C%22%24initial_referring_domain%22%3A%20%22auth.flowaccount.com%22%2C%22%24user_id%22%3A%20%22561845%22%2C%22__alias%22%3A%20561845%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; FlowApp.ApplicationCookie=6tHAl41a3Fa79Jxab0y2WWJNVGx94oikVe-bTvMuD_AjUbJLBoviHM_CqwFL-M6zAY7DI0rn4mk2x_txuXNrfCLGFbKroy_5WqrKRQId2Xhw_nivsaawGdBupMFEPXWezXrvLhzLGIAWCc-VpBHWcGnQzkTAlPpIkFZJiAPUp9ywOZr-GZa7cVc05dV_Mjd2-bwbGnz_tYZXr5dlVAFl2lCciigukBAiBzYqv_k8EIzvaeUve8T1CI2JpGsovJc177MneGP8QgkLpEw47vxvh0Wtzcvdul-ZqJeKxr05eGPUo4AhZZiuZ7MVweIaUWHIrUae-bFJD31emVij7Go1DI0FibVKRj9eXGdCxDWO4kHW7r7nW-lO-O6i4DM-0tTRAJ3DhtInJzQuRhCW7BUwRbAMW_6sHayu1hjZ5ELBAzesO3fVTsfT9wdLy_n2WSwXbWh4vPQojNK1_LWM3Re-wh4iBhv9ivSYpnxxw8wwJtSR-OWBufyyrUcOqz0HrSbvwj62Zkr_5igUZD1zt2ZmuAicRfpaFl1NQHtlSYQvMYdue80-PCr0bULwo1_uDdagTpI6U4lnbmQkpf8Gw27GhXAErp6crLIYuSknVsZSlm6gCEptXGOV8PhgrUEIEHuqncG76P6RD-r58Hk_Jrzflxmt-20RNZk9sScm1cc-0Jau0fLWWM14zhRIdISxwCD3Eu-gPrKmwgeDY0I_mmDVn5_To-KvLsZrwX7H1PHUmkqHygA035HNC6o7I7nEOw4WTHaMQaWrg8KMGQyER12qmXyYi4021chjdeUb6BvYGnif8UYQxb24UZPRkjWaodJUNpg3Y1YEFT0u_heGrCj7gf7ZFAfkP5yPhLnui5-fSGxpCvsOFJ4EeCORqjxj4mYFHUSgk3cFQu2ha2jqQQn4PhCF4Xm_5if0x5ZJyRc-ZoFxu1kuoo026sxFK519AZBmouzfBnrCOZp4Jrn-Ssl-k_doL7PvWQM6UkZGqmWSbRSJikxKAUarx8WWwGt_0wSuSbs26VK0zjk5Y5iyXwchXA',
    'origin': ' https://app.flowaccount.com',
    'referer': ' https://app.flowaccount.com/CompanyAdmin/th',
    'sec-fetch-dest': ' empty',
    'sec-fetch-mode': ' cors',
    'sec-fetch-site': ' same-origin',
    'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
  },
  body: "{\"documentId\":\"11103696\",\"_type\":\"TaxInvoice\"}"

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
