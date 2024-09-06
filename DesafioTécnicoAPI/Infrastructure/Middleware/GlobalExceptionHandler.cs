using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace DesafioTecnicoAPI.Infrastructure.Middleware
{
    internal sealed class GlobalExceptionHandler : IExceptionHandler
    {
        private const string ExceptionMessage = "An unhandled exception has occurred while executing the request.";
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext,
                                              Exception exception,
                                              CancellationToken cancellationToken)
        {
            _logger.LogError(exception, exception is Exception ? exception.Message : ExceptionMessage);

            var problemDetails = new ProblemDetails()
            {
                Status = HandleExceptionError(httpContext, exception),
                Type = exception.GetType().Name,
                Title = ExceptionMessage,
                Detail = exception.Message,
                Instance = $"{httpContext.Request.Method} - {httpContext.Request.Path}"
            };

            httpContext.Response.StatusCode = problemDetails.Status.Value;

            await httpContext.Response.WriteAsJsonAsync(problemDetails);
            return true;
        }
        private int HandleExceptionError(in HttpContext httpContext, in Exception exception)
        {
            return  exception switch
            {
                NotImplementedException =>  (int)HttpStatusCode.BadRequest,
                ArgumentNullException => (int)HttpStatusCode.BadRequest,
                _ => (int)HttpStatusCode.InternalServerError
            };
        }
    }
}
