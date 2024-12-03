export interface ListVouchers {
    id: string;
    voucher: string;
    voucherDescription: string;
    redeemed: boolean;
    availableQuantity: number;
    validFrom: Date;
    validUntil: Date;
    redeemedAt: Date | null;
    redemptionCode: string;
    qrCodeUrl: string;
    coffeeShopId: string;
    coffeeShop: {
        name: string;
        address: string;
    }
}