from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer


# Lead Viewset
## Allows us to create a CRUD API without specifying methods for functionality
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = LeadSerializer
