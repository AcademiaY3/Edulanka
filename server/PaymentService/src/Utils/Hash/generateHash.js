import crypto from 'crypto'
import md5 from 'crypto-js/md5.js';

export default function generateHash(order_id, amt) {

    let merchantSecret = process.env.merchant_secret;
    let merchantId = process.env.merchant_id;
    let orderId = order_id;
    let amount = amt;
    let hashedSecret = md5(merchantSecret).toString().toUpperCase();
    let amountFormated = parseFloat(amount).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '');
    let currency = 'LKR';
    let hash = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();

    console.log(amountFormated)

    return hash;
}
