from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'is_active', 'is_staff', 'date_joined')
    readonly_fields = ('date_joined', 'last_login') # افزودن date_joined به readonly_fields
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    search_fields = ('username',)
    ordering = ('username',)

admin.site.register(User, CustomUserAdmin)