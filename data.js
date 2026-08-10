// data.js - Initial Data & Configuration for Ozon Finance SPA

// 1. Account Balances for Home Page
var INITIAL_BALANCES = {
    business: 0.50, // Счёт для бизнеса
    personal: 0.00,   // Личный счёт
};

var LAMEI_REQUISITES = {
    inn: "6164134734",
    ogrn: "1216100010092",
    account: "40702810125140002475",
    bank: "ФИЛИАЛ \"РОСТОВСКИЙ\" АО \"АЛЬФА-БАНК\"",
    bik: "046015207",
    corrAccount: "30101810500000000207",
};

var ALD_REQUISITES = {
    inn: "6168112435",
    ogrn: "1206100029684",
    account: "40702810125140002243",
    bank: "ФИЛИАЛ \"РОСТОВСКИЙ\" АО \"АЛЬФА-БАНК\"",
    bik: "046015207",
    corrAccount: "30101810500000000207",
};

// 2. Initial Payments / Transaction History
// Exact transactions from file (incoming deposits) paired with matched SBP outgoing transfers to Максим Александрович Л. and Юрий Геннадьевич П.
var INITIAL_PAYMENTS = [
    // --- 15.08.2026 (ALD 19700) ---
    {
        date: "2026-08-15T12:54:00Z",
        amount: -7700.00,
        status: "Исполнен",
        title: "Юрий Геннадьевич П.",
        description: "Перевод через СБП в Т-Банк. НДС не облагается"
    },
    {
        date: "2026-08-15T12:37:00Z",
        amount: -12000.00,
        status: "Исполнен",
        title: "Максим Александрович Л.",
        description: "Перевод через СБП в Сбербанк. НДС не облагается"
    },
    Object.assign({
        date: "2026-08-15T12:12:00Z",
        amount: 19700.00,
        status: "Исполнен",
        title: "ООО «СЕМЕЙНАЯ СТОМАТОЛОГИЯ АЛДКЛИНИК»",
        description: "Перечисление по договору №2 от 2.07.2026г. Без НДС"
    }, ALD_REQUISITES),

    // --- 05.08.2026 (LAMEY 13475) ---
    {
        date: "2026-08-05T16:48:00Z",
        amount: -5000.00,
        status: "Исполнен",
        title: "Юрий Геннадьевич П.",
        description: "Перевод через СБП в Т-Банк. НДС не облагается"
    },
    {
        date: "2026-08-05T15:42:00Z",
        amount: -8475.00,
        status: "Исполнен",
        title: "Максим Александрович Л.",
        description: "Перевод через СБП в Сбербанк. НДС не облагается"
    },
    Object.assign({
        date: "2026-08-05T15:19:00Z",
        amount: 13475.00,
        status: "Исполнен",
        title: "ООО «Ламэй»",
        description: "Перечисл.согласно Дог.от 15.06.2026г.// НДС не облагается"
    }, LAMEI_REQUISITES),

    // --- 02.08.2026 (ALD 19700) ---
    {
        date: "2026-08-02T10:47:00Z",
        amount: -19700.00,
        status: "Исполнен",
        title: "Максим Александрович Л.",
        description: "Перевод через СБП в Сбербанк. НДС не облагается"
    },
    Object.assign({
        date: "2026-08-02T10:23:00Z",
        amount: 19700.00,
        status: "Исполнен",
        title: "ООО «СЕМЕЙНАЯ СТОМАТОЛОГИЯ АЛДКЛИНИК»",
        description: "Перечисление по договору №2 от 2.07.2026г. Без НДС"
    }, ALD_REQUISITES),

    // --- 21.07.2026 (LAMEY 13475) ---
    {
        date: "2026-07-21T17:38:00Z",
        amount: -6475.00,
        status: "Исполнен",
        title: "Юрий Геннадьевич П.",
        description: "Перевод через СБП в Т-Банк. НДС не облагается"
    },
    {
        date: "2026-07-21T17:09:00Z",
        amount: -7000.00,
        status: "Исполнен",
        title: "Максим Александрович Л.",
        description: "Перевод через СБП в Сбербанк. НДС не облагается"
    },
    Object.assign({
        date: "2026-07-21T16:44:00Z",
        amount: 13475.00,
        status: "Исполнен",
        title: "ООО «Ламэй»",
        description: "Перечисл.согласно Дог.от 15.06.2026г.// НДС не облагается"
    }, LAMEI_REQUISITES),

    // --- 13.07.2026 (LAMEY 19700) ---
    {
        date: "2026-07-13T11:36:00Z",
        amount: -19700.00,
        status: "Исполнен",
        title: "Юрий Геннадьевич П.",
        description: "Перевод через СБП в Т-Банк. НДС не облагается"
    },
    Object.assign({
        date: "2026-07-13T11:18:00Z",
        amount: 19700.00,
        status: "Исполнен",
        title: "ООО «Ламэй»",
        description: "Перечисл.согласно Дог.от 15.06.2026г.// НДС не облагается"
    }, LAMEI_REQUISITES),

    // --- 15.06.2026 (LAMEY 19700) ---
    {
        date: "2026-06-15T15:22:00Z",
        amount: -9700.00,
        status: "Исполнен",
        title: "Юрий Геннадьевич П.",
        description: "Перевод через СБП в Т-Банк. НДС не облагается"
    },
    {
        date: "2026-06-15T14:49:00Z",
        amount: -10000.00,
        status: "Исполнен",
        title: "Максим Александрович Л.",
        description: "Перевод через СБП в Сбербанк. НДС не облагается"
    },
    Object.assign({
        date: "2026-06-15T14:31:00Z",
        amount: 19700.00,
        status: "Исполнен",
        title: "ООО «Ламэй»",
        description: "Перечисл.согласно Дог.от 15.06.2026г.// НДС не облагается"
    }, LAMEI_REQUISITES)
];

/**
 * Helper to parse INITIAL_PAYMENTS into internal transaction objects.
 * Accepts pipe-delimited strings or JS objects.
 */
function parseInitialPayments(paymentsList) {
    if (!Array.isArray(paymentsList)) return [];

    const totalCount = paymentsList.length;

    return paymentsList.map((item, index) => {
        if (typeof item === 'object' && item !== null) {
            const rawAmount = typeof item.amount === 'number' ? item.amount : parseFloat(item.amount || 0);
            return {
                id: item.id || (totalCount - index),
                date: item.date instanceof Date ? item.date : new Date(item.date),
                title: item.title || item.name || '',
                amount: rawAmount,
                type: rawAmount < 0 ? 'outcoming' : 'incoming',
                status: item.status || 'Исполнен',
                description: item.description || '',
                inn: item.inn || '',
                ogrn: item.ogrn || '',
                account: item.account || '',
                bank: item.bank || '',
                bik: item.bik || '',
                corrAccount: item.corrAccount || '',
                address: item.address || ''
            };
        }

        if (typeof item === 'string') {
            const parts = item.split('|');
            const dateStr = parts[0] ? parts[0].trim() : '';
            const rawAmount = parts[1] ? parts[1].trim().replace('+', '') : '0';
            const amountNum = parseFloat(rawAmount) || 0;
            const statusStr = parts[2] ? parts[2].trim() : 'Исполнен';
            const titleStr = parts[3] ? parts[3].trim() : '';
            const descStr = parts[4] ? parts[4].trim() : '';

            return {
                id: totalCount - index,
                date: new Date(dateStr),
                title: titleStr,
                amount: amountNum,
                type: amountNum < 0 ? 'outcoming' : 'incoming',
                status: statusStr,
                description: descStr,
                inn: '',
                ogrn: '',
                account: '',
                bank: '',
                bik: '',
                corrAccount: '',
                address: ''
            };
        }

        return null;
    }).filter(Boolean);
}

// Expose variables globally for browser environment
if (typeof window !== 'undefined') {
    window.INITIAL_BALANCES = INITIAL_BALANCES;
    window.INITIAL_PAYMENTS = INITIAL_PAYMENTS;
    window.parseInitialPayments = parseInitialPayments;
}

