export class Constant {
  public static readonly DATE_FMT = 'dd/MM/yyyy';
  public static readonly DATE_FMT_FULL = 'dd/MM/yyyy h:mm a';
  public static readonly DATE_FMT_YEAR = 'yyyy';
  public static readonly DATE_FMT_NOT_FULL = 'dd/MM/yyyy HH:mm:ss';
  public static readonly MESSAGE_DELETE_SUCCESS = 'Xóa thành công';
  public static readonly MESSAGE_ADD_SUCCESS = 'Tạo mới thành công';
  public static readonly MESSAGE_SERVICE_ERROR = 'Lỗi dữ liệu';
  public static readonly MESSAGE_UPDATE_SUCCESS = 'Cập nhật thành công';
  public static readonly SUCCESS = 'success';
  public static readonly ERROR = 'error';
  public static readonly WARNING = 'warning';
  public static readonly TOKEN = 'token';
  public static readonly ACTION = 'action';
  public static readonly USER_INFO = 'user';
  public static readonly LOGIN_FAIL = 'Incorrect username and/or password.';
  public static readonly DELETE = 'Xóa';
  public static readonly CREATE = 'Thêm';
  public static readonly UPDATE = 'Sửa';
  public static readonly ADMIN_DASHBOARD = 'admin';
  public static readonly PORTAL_DASHBOARD = '/dashboard';
  public static readonly CSC_DASHBOARD = '/csc/dashboard';
  public static readonly PHONG = 'phong';
  public static readonly SIGNUP_SUCCESS = 'Sign up successfully.';

  public static readonly DON_HANG = 'donhang';
  public static readonly INIT_DATA = 'initial_data';
  public static readonly LANGUAGE = 'language';

  public static readonly ORDER_STATUS_WAITING_VERIFY = 0;
  public static readonly ORDER_STATUS_VERIFIED = 10;
  public static readonly ORDER_STATUS_PAID = 15;
  public static readonly ORDER_STATUS_READY4PICKING = 20;
  public static readonly ORDER_STATUS_PICKED = 30;
  public static readonly ORDER_STATUS_COMPLETED = 40;
  public static readonly ORDER_STATUS_CANCELLED = 50;

  public static readonly ORDER_CATEGORY_DOCUMENT = 91;
  public static readonly ORDER_CATEGORY_COMMERCIAL_SAMPLE = 32;
  public static readonly ORDER_CATEGORY_GIFT = 31;
  public static readonly ORDER_CATEGORY_SALES_OF_GOODS = 11;
  public static readonly ORDER_CATEGORY_OTHER = 991;

  public static readonly ADDITIONAL_CHARGE_ON_BASIC_CHARGE = 1;
  public static readonly ADDITIONAL_CHARGE_ON_DESTINATION = 2;
  public static readonly ADDITIONAL_CHARGE_ON_FAR_AREA = 3;

  public static readonly ADDITIONAL_CHARGE_ABSOLUTE = 1;
  public static readonly ADDITIONAL_CHARGE_RELATIVE = 2;
  public static readonly ADDITIONAL_CHARGE_WEIGHT_CHARGE = 3;

  public static readonly DISCOUNT_TYPE_ABSOLUTE = 1;
  public static readonly DISCOUNT_TYPE_RELATIVE = 2;


  public static readonly PER_ADMIN = 1;
  public static readonly PER_USER = 2;
  public static readonly PER_GROUP = 3;
  public static readonly PER_CUSTOMER_VIEW = 4;
  public static readonly PER_CUSTOMER_EDIT = 5;
  public static readonly PER_SYSTEM_CONFIG = 6;
  public static readonly PER_POINT = 7;
  public static readonly PER_POINT_ADD = 8;
  public static readonly PER_XN = 9;
  public static readonly PER_CUSTOMER = 100;


  public static readonly UNIT_TYPE =
  {
    Number: 0,
    Boolean: 5,
    Text: 10
  }
  public static readonly RESULT_VALUE_LOG =
  {
    UPDATE_VALUE: "Update",
    ADD_FILE: "Add_File",
    REMOVE_FILE: "Romove_File"
  }
}
