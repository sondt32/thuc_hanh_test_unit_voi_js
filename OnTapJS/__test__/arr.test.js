const { TimSoChan, InDanhSachSV } = require('../Array/bai_1');
const { sapXepMang,daoNguocChuoi } = require('../Array/bai_2');

describe('TimSoChan', () => {
    it('Trả về mảng số chẵn', () => {
        const result = TimSoChan();
        expect(result).toEqual([2, 10]);
    });
});

describe('InDanhSachSV', () => {
    it('In DSSV thỏa mãn điều kiện và ghép chuỗi', () => {
        const result = InDanhSachSV();
        expect(result).toEqual(['ph11_8', 'ph13_6.5', 'ph14_7.5']);
    });
});



describe('sapXepMang', () => {
    it('Kiểm tra mảng đã sắp xếp', () => {
        const result = sapXepMang();
        expect(result).toEqual([87, 9, 6, 6, 4, 3, 2, 2]);
    });
});

describe('daoNguocChuoi', () => {

    it('Kiểm tra đảo chuỗi "ngày/tháng/năm" thành "năm-tháng-ngày"', () => {
        const result = daoNguocChuoi('01/02/2023');
        expect(result).toEqual('2023-02-01');
    });

});