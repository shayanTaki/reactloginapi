# پروژه صفحه ورود ریسپانسیو با React و Django

این پروژه یک صفحه ورود و ثبت‌نام ریسپانسیو را با استفاده از فریم‌ورک React در فرانت‌اند و Django REST Framework در بک‌اند پیاده‌سازی می‌کند. از یک مدل کاربری سفارشی در Django استفاده شده است.

## ویژگی‌ها

*   صفحه ورود ریسپانسیو با طراحی مدرن
*   صفحه ثبت‌نام برای ایجاد حساب کاربری جدید
*   استفاده از مدل کاربری سفارشی در Django
*   ارتباط فرانت‌اند و بک‌اند از طریق API
*   قابلیت ایجاد کاربر از طریق React
*   قابلیت ورود به سیستم با حساب‌های ایجاد شده

## پیش‌نیازها

*   Node.js و npm یا yarn
*   Python 3.x
*   pip

## راه‌اندازی

1. **کلون کردن ریپازیتوری:**

    ```bash
    git clone [آدرس ریپازیتوری گیت‌هاب]
    cd [نام پوشه پروژه]
    ```

2. **راه‌اندازی بک‌اند (Django):**

    ```bash
    cd reactloginapi
    python -m venv venv
    source venv/bin/activate  # یا venv\Scripts\activate در ویندوز
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
    python manage.py createsuperuser  # ایجاد کاربر ادمین (اختیاری)
    python manage.py runserver
    ```

3. **راه‌اندازی فرانت‌اند (React):**

    ```bash
    cd ../../frontend
    npm install  # یا yarn install
    npm start    # یا yarn start
    ```

    برنامه React شما در مرورگر به آدرس `http://localhost:3000` باز خواهد شد. API بک‌اند روی `http://localhost:8000` در حال اجرا است.

## تنظیمات

*   **CORS:** تنظیمات مربوط به CORS در فایل `settings.py` انجام شده است تا برنامه React بتواند با API ارتباط برقرار کند.

    ```python
    CORS_ALLOWED_ORIGINS = [
        "http://localhost:3000",
    ]
    ```

*   **مدل کاربری سفارشی:** مدل کاربری سفارشی در `/core/models.py` تعریف شده و در `/settings.py` به عنوان مدل پیش‌فرض تنظیم شده است.

    ```python
    AUTH_USER_MODEL = 'core.User'
    ```

## استفاده

1. به آدرس `http://localhost:3000` در مرورگر خود بروید.
2. از طریق صفحه ثبت‌نام یک حساب کاربری جدید ایجاد کنید.
3. با استفاده از اطلاعات کاربری ایجاد شده، وارد سیستم شوید.

## مشکلات رایج

*   **خطای CORS:** اگر با خطای CORS مواجه شدید، مطمئن شوید که `django-cors-headers` به درستی نصب و تنظیم شده است و دامنه فرانت‌اند در `CORS_ALLOWED_ORIGINS` قرار دارد.
*   **عدم اتصال به بک‌اند:** مطمئن شوید که هر دو سرور فرانت‌اند و بک‌اند در حال اجرا هستند و آدرس‌های API در فرانت‌اند به درستی تنظیم شده‌اند.

## مشارکت

برای مشارکت در توسعه این پروژه، می‌توانید درخواست‌های Pull ایجاد کنید یا Issues را گزارش دهید.


---
