from .models import bookingDetails,ticketDetails
from django import forms
class bookingform(forms.ModelForm):
    class Meta:
        model=bookingDetails
        fields="__all__" 
        widgets={
            'date':forms.TextInput(attrs={'class':'session_form'})
        }
class ticketform(forms.ModelForm):
    class Meta:
        model=ticketDetails
        fields='__all__'
