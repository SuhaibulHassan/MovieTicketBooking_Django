from django import forms
from backend.models import bookingDetails

class bookingform(forms.ModelForm):
    class Meta:
        model=bookingDetails
        fields="__all__"