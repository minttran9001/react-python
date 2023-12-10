from rest_framework import serializers
from leads.models import Lead


# Lead Serializer
## Turns lead model into JSON
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        ## fields = ('id', 'name', 'email', 'message')
        ## Use all fields in model
        fields = "__all__"
