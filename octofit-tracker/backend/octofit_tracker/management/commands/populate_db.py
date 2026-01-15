from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        Leaderboard.objects.all().delete()
        Activity.objects.all().delete()
        Workout.objects.all().delete()
        User.objects.all().delete()
        Team.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='dc', description='DC Superheroes')

        # Create Users
        tony = User.objects.create(email='tony@stark.com', name='Tony Stark', team='marvel')
        steve = User.objects.create(email='steve@rogers.com', name='Steve Rogers', team='marvel')
        bruce = User.objects.create(email='bruce@wayne.com', name='Bruce Wayne', team='dc')
        clark = User.objects.create(email='clark@kent.com', name='Clark Kent', team='dc')

        # Create Workouts
        w1 = Workout.objects.create(name='Super Strength', description='Heavy lifting', suggested_for='marvel')
        w2 = Workout.objects.create(name='Flight Training', description='Aerial maneuvers', suggested_for='dc')

        # Create Activities
        Activity.objects.create(user=tony, type='run', duration=30, date=timezone.now().date())
        Activity.objects.create(user=steve, type='swim', duration=45, date=timezone.now().date())
        Activity.objects.create(user=bruce, type='cycle', duration=60, date=timezone.now().date())
        Activity.objects.create(user=clark, type='fly', duration=120, date=timezone.now().date())

        # Create Leaderboard
        Leaderboard.objects.create(user=tony, points=150, rank=1)
        Leaderboard.objects.create(user=steve, points=120, rank=2)
        Leaderboard.objects.create(user=bruce, points=110, rank=3)
        Leaderboard.objects.create(user=clark, points=100, rank=4)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
