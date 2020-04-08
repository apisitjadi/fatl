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
    'cookie': '_gcl_au=1.1.1251756982.1583827647; __hstc=225320709.90ffbf36ec19399da3c553d0f7e576a5.1583827647369.1586213382409.1586382347870.33; hubspotutk=90ffbf36ec19399da3c553d0f7e576a5; _ga=GA1.2.1719341593.1583827647; _fbp=fb.1.1583827647815.1516668749; freshworks-s360-vid=3e8da8a6-0987-418f-93a6-7505600a33cd; ASP.NET_SessionId=zxevb2eulrals1pk1zlrw4t5; __RequestVerificationToken=2fU4G2tAqrcO-yurKgNgRNZ-p3jmhZK7oHBIU5KFlPlZj6SNs2gfC-RMHQxSIzkWRlV6ZJgQmP2VjJeLItFr2G3b7TJhSKSycwzWcEQtBgw1; hsfirstvisit=; FlowApp.ApplicationCookie=f_lFQTGT6CfrTBayVcIi2fTVR33Dm09IO5q2nrDoSaxrthMtlhxuf36lzoJEu8G9NjPsRfpa1dlNURdO3GiXWVqkqum2u_Q2fmYpX9Amm20MbmqQ_516YH-voKBiGDa5QQqQc_1qmrBIfgRE3dzrBfV1twm1krvYG6Xrn2mTmeH8v4EYNYqF0Fk40u4SoNuC1w2PeXd3MpSRiCpycvAUwYj1BPoLoYtYw_T_4uEpCh2eo3jcd3SzyfLGv9EaN_ad15DzdKIX_b4JTCrr-xtkTH_IJR8xO3EmQI3rJtKij3dBaMcIOk5ecudh3w-MMrQ-s4bmtjbTvV3pv2tP4fXmlnMya3-QQmDldxnvjWCCwv3KyRRNmDEBngpPyj17pK8t3ZG60DtKg4phfHM82kdLvY3hDJYvCr7OvPpH032wQDPth6565MaknrEQewCqnLelgaIWkGoY3Xfu0C7qPTP6Hr-qFP_7QEweY3i8RI_bP6lJx-pe-hlEpjw8EQfk1yrLs7pv8GZBtsd9kJPCCYnK8PhparSs4BIXKcI4mO4RmPa9E1Lpc5CNx0DbhcqPewuuUuVB-YIe7mWsJd-E9V5iCYTLFBIRyy3264jnbZTc3kH8f9giCmlBLy1zDIaNSX8vrEbaL0eOjBFqW5n3q9spluIvFYkSPxKm_6A4gjqmtdwmaW46ty8XbccJeVZqHT2vmYdQ2pT__u6wOAtAnWt-7bpWK3f3dHv4cGBXCkfPT39R7sTP56-X62DZHWEIqyS094bn6AUs4TDekQP-R9fj3qD_sPfDQplG9j3IgD5WaKPmo5HsWIOWOnzySwxl9N_-xJnHz5Mn5KjafhoQ_JhFxKHMVS5QeTimUvh2oLxhyYjONVH21fIBLhE7z_9P9b5ArfdjV067qPDdBR1Eum72yABnLk3KtqwLKD_qGQRySK1TCRyuymJi7GtDxpvOLJryeiJQDuaAdt5EFARfu514DPTyccn858BatRBM-dplTUDZOYwQS4Wn1y0J4x4VYolG; __hssrc=1; OpenIdConnect.nonce.jP2zbG4er0LG6jvtoY3h8vsiqeoeMNVD8Tkq0JC3HIk%3D=S0w1QkUxSzRsTi1IWVhnNkUtbUtycW5HUXFUVzd0RVdwZWUxbGJXTmxMOTNQMmxXNVpfdmRUeXRLaTBGM3lqUnotalNtV2s3bXRrY1BoZk1XYWVIQURobkdpbDY3RDNJeVBLUXVLTWJjU2lrMnRwUlBhUmt4blQ2VlF5bGpIaUZ1bzNra0V4eHJ6NWZBSkZQT1IwWk5LR3h1eUJTVEpSLWI2VmcyZ3RNbFdhVjNiZVIwa0tDb0JZajBibGs4ZzBvM1RjVVVHZXE1LUJLdzlXeXBnTmEtRVlKekpMM1FIUUNlWVFjZHM4Sjd1NA%3D%3D; _gid=GA1.2.918465552.1586382347; __hssc=225320709.4.1586382347870; culture=th; _gat=1; _gat_UA-58465095-1=1; mp_41272d18399c471ff77934a08cde5694_mixpanel=%7B%22distinct_id%22%3A%20%2246249%22%2C%22%24device_id%22%3A%20%22170c37c1351163-0c639496505afd8-4c302879-1fa400-170c37c13524d1%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fauth.flowaccount.com%2Fconnect%2Fauthorize%3Fclient_id%3Dflowaccount-mvc%26redirect_uri%3Dhttps%253a%252f%252fapp.flowaccount.com%252f%26response_mode%3Dform_post%26response_type%3Dcode%2Bid_token%26scope%3Dopenid%2Bflowaccount-api%2Boffline_access%2Btenant%26state%3DOpenIdConnect.AuthenticationProperties%253dNiSUZ4evkSOrObmJqW6NnLdLdyeFLRdaF8b9aGJBziA9JGw9E21yUdV5q30kh51GYP-62sGyxowkzc6aI9zFkgKYvS1_6mVmvoRy86JXGe6o78qth1hwM5GKBiKGjdbiklBihG2K5D1FLEpaAc4Mu8shcYPKMkUzCf7kMJayLkhbGdFoAirY05yDpquSb_KVj8gLP7W6279N_YvWNUYM_U8SbAUEnjnxuKv9NCR9WVs%26nonce%3D637194244510408663.YjQ0ZTZlNDMtYzY0NC00NGRlLWI2MzYtOTdhNmU5NDIzOTEzYzUwYTIyZGEtNGEzYi00NTBmLTk2YTctYjMxMTBjMDdmZTQ0%22%2C%22%24initial_referring_domain%22%3A%20%22auth.flowaccount.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%2C%22%24user_id%22%3A%20%2246249%22%7D',
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
